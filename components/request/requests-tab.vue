<template>
  <TabsRoot
    class="border bg-white/5 rounded-3xl relative"
    :default-value="request_type"
  >
   
    <TabsList
      class="p-4 border-b grid grid-cols-[auto_1fr] gap-x-4 items-center min-h-[73px] transition-opacity duration-1000"
      v-if="request_type === 'history'"
    >
      <div class="text-lg font-medium pl-6 hidden md:block">Request history</div>
      <TabsTrigger value="song" as-child>
        <NuxtLink
          replace
          :to="{ query: { ...route.query, request_tab: 'song' } }"
          class="flex items-center gap-x-1 ml-auto pr-6"
        >
          <Button :variant="'outline'" :size="'icon'">
            <ArrowLeft />
          </Button>
          <div>Back to live request</div>
        </NuxtLink>
      </TabsTrigger>
    </TabsList>
      <TabsList
        class="p-4 border-b grid grid-cols-[auto_auto_1fr] gap-x-4 items-center -z-10"
        v-else=
      >
        <TabsTrigger value="song" as-child>
          <NuxtLink
            replace
            :to="{ query: { ...route.query, request_tab: 'song' } }"
            class="[&[data-state='active']_.count]:hidden"
          >
            <Button
              :variant="request_type === 'song' ? 'primary' : 'outline'"
              class="gap-x-2 md:min-w-[100px]"
            >
              <div>song</div>
              <div
                class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"
              >
                {{ songRequests.length }}
              </div>
            </Button>
          </NuxtLink>
        </TabsTrigger>
        <TabsTrigger value="hype" as-child>
          <NuxtLink
            replace
            :to="{ query: { ...route.query, request_tab: 'hype' } }"
            class="[&[data-state='active']_.count]:hidden"
          >
            <Button
              :variant="request_type === 'hype' ? 'primary' : 'outline'"
              class="gap-x-2 md:min-w-[100px]"
            >
              <div>hype</div>
              <div
                class="size-5 text-sm bg-secondary text-destructive rounded-full font-semibold count"
              >
                {{ hypeRequests.length }}
              </div>
            </Button>
          </NuxtLink>
        </TabsTrigger>

        <TabsTrigger value="history" as-child>
          <NuxtLink
            :to="{ query: { ...route.query, request_tab: 'history' } }"
            replace
            class="ml-auto"
          >
            <Button :variant="'ghost'" class="gap-x-2 text-muted-foreground hidden md:inline-flex">
              <SvgIcon name="history" />
              <div >Request history</div>
            </Button>

           
        <div class="md:hidden"> <Tooltip message="Request history" >
          <Button :variant="'ghost'" :size="'icon'" >
              <SvgIcon name="history" />
            </Button>
         </Tooltip></div>
           
          </NuxtLink>
        </TabsTrigger>
      </TabsList>
    <div 
      class="py-8 absolute inset-0 bg-white/5 rounded-[inherit] grid place-items-center z-10"
      v-if="status == 'pending' || error"
    >
      <Loader class="size-5 animate-spin hidden" v-if="status === 'pending'" />
    <!-- hide loader for now -->
      <div v-else-if="error" class="grid place-items-center gap-y-4">
        <div  class="text-destructive text-center">{{ error?.data?.message ?? 'Failed to load request' }}</div>
        <Button :variant="'secondary'" @click="()=>refresh()">
           Retry
        </Button>
      </div>
    </div>
 
   <template v-if="!error">
    <TabsContent value="song">
      <RequestList :type="'song'" :loading="status==='pending'" :requests="songRequests" :onUpdate="refresh" class="p-4" />
    </TabsContent>
    <TabsContent value="hype" class="p-4">
      <RequestList :type="'hype'" :loading="status==='pending'"  :requests="hypeRequests" :onUpdate="refresh" />
    </TabsContent>
    <TabsContent value="history" class="p-4">
      <RequestHistoryList :loading="status==='pending'"  :requests="inActiveRequests" :onUpdate="refresh" />
    </TabsContent>
   </template>
  </TabsRoot>
</template>

<script lang="ts" setup>
import { Loader, ArrowLeft } from "lucide-vue-next";
import type { EventRequest, PusherEndEvent, PusherRequestUpdate } from "~/types/event";
import Button from "../ui/button.vue";
import Tooltip from "../ui/tooltip.vue";
import RequestList from "./request-list.vue";
import RequestHistoryList from "./request-history-list.vue";
import { eventRequests } from "~/constants/mocks";
import { useLiveEvent, eventRequestKey } from "~/composables/useLiveEvent";
import Pusher from "pusher-js";
const props = withDefaults(
	defineProps<{
		requests?: EventRequest[];
		event_id?: string | number;
		onAction?: () => void;
	}>(),
	{
		requests: () => eventRequests,
		event_id: "1",
	},
);
const route = useRoute();
const active_tab = computed(
	() => route?.query?.request_tab as "song" | "hype" | "history",
);
const request_type = computed(() => active_tab.value ?? "song");
const { fetchEventRequests } = useLiveEvent();
const {
	data: event_requests,
	status,
	error,
	refresh: refreshRequestList,
} = useAsyncData(
	`EVENT-${props.event_id}-REQUESTS`,
	() => fetchEventRequests(props.event_id),
	{
		transform: (data) => {
			const request_order_map = {
				"now-playing": 0,
				new: 1,
				"payment-pending": 2,
				completed: 3,
				declined: 4,
				ignored: 5,
			};

			return data?.data?.sort(
				(a, b) => request_order_map?.[a.status] - request_order_map[b.status],
			);
		},
	},
);

const refresh = () => {
	props.onAction?.();
	refreshRequestList();
};

const optimisticallyUpdateEventRequest = (
	request_id: number | string,
	status: EventRequest["status"],
) => {
	const updatedRequests = event_requests.value?.map((request) => {
		if (request.id === request_id) return { ...request, status };
    if(status==='now-playing' && request.status==='now-playing' && request.id!==request_id){
      return {...request, status:"completed"}
    }
		return request;
	});
	event_requests.value = updatedRequests;
};

provide(eventRequestKey, {optimisticallyUpdateEventRequest, requests:event_requests.value??[]})

const activeRequests = computed(() => {
	if (!event_requests.value || error.value) return [];
	return event_requests.value?.filter(
		(item) => item.status === "new" || item.status === "now-playing",
	);
});

const inActiveRequests = computed(() => {
	if (!event_requests.value || error.value) return [];
	return event_requests.value?.filter(
		(item) => item.status !== "new" && item.status !== "now-playing",
	);
});

const songRequests = computed(() => {
	return activeRequests.value.filter((item) => item.type === "song");
});

const hypeRequests = computed(() => {
	return activeRequests.value.filter((item) => item.type === "hype");
});

onMounted(() => {
  const pusher = new Pusher("0259a0ebe407b648fd2f", {
    cluster: "mt1",
  });

  pusher.connection.bind("error", (err) => {
    console.log({ err, state: "ERROR" });
  });

  pusher.connection.bind("connected", (data: PusherEndEvent) => {
    console.log({ data, state: "CONNECTED" });
  });

  const channel = pusher.subscribe(`SPREvents.${props.event_id ?? null}`);
  console.log({ channel });

  channel.bind("StatusChangedToNew", (data:PusherRequestUpdate) => {
    showToast({title:'A new request came in', duration:5000})
    refresh()
    console.log("NEW REQUEST IN THEN", data);
  });

  channel.bind("StatusChangedToCompleted", (data:PusherRequestUpdate) => {
    console.log("NOW COMPLETED", data);
  });

  channel.bind("StatusChangedToNowPlaying", (data:PusherRequestUpdate) => {
    console.log("NOW PLAYING", data);
  });

  channel.bind("StatusChangedToPending", (data:PusherRequestUpdate) => {
    console.log("NOW PENDING", data);
  });

  channel.bind("StatusChangedToRejected", (data:PusherRequestUpdate) => {
    console.log("NOW REJCTED", data);
  });

  channel.bind_global((event:any, data:any) => {
    console.log(`The event ${event} was triggered with data ${data}`, data);
  });
});

</script>
