<template>
  <TableContainer
    :heading="heading"
    :data="events"
    :loading="status === 'pending'"
    class="hidden md:block"
    :pagination-meta="{
      page: meta?.current_page || 1,
      per_page: meta?.per_page || DEFAULT_PAGE_LIMIT,
      total: meta?.total || 0,
      onPageChange,
    }"
  >
    <NuxtLink
      custom
      v-slot="{ navigate }"
      v-for="event in events"
      :key="event.id"
      :to="`events/${event.id}/event-details`"
    >
      <tr class="!h-20 text-muted-foreground" @click="navigate">
        <td>{{ event.title }}</td>
        <td>{{ event.address }}</td>
        <td>{{ event.start_date }}</td>
        <td>{{ event.requests_count }}</td>
        <td>₦{{ formatMoney(event.earnings ?? 0) }}</td>
      </tr>
    </NuxtLink>

    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No events yet
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You haven’t completed any event yet. Once you do, your events will
            appear here
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
  <div class="space-y-1 md:hidden">
    <template v-if="status === 'pending'">
      <div class="h-10 bg-white/5 animate-pulse" v-for="i in 4" :key="i"></div>
    </template>
    <template v-else>
      <div v-if="events.length" class="space-y-1">
        <CollapsibleRoot
          v-for="(event, index) in events"
          :key="event.id + index"
          class="rounded-lg bg-white/5"
        >
          <CollapsibleTrigger
            class="flex items-center justify-between w-full p-4 [&[data-state='open']_.caret]:rotate-180"
          >
            <div class="font-semibold">{{ event.title }}</div>
            <ChevronDown class="size-5 caret transition-transform relative" />
          </CollapsibleTrigger>
          <CollapsibleContent
            class="data-[state=open]:animate-collapsibleSlideDown data-[state=closed]:animate-collapsibleSlideUp overflow-hidden"
          >
            <div class="space-y-4 px-4 pb-4">
              <div class="space-y-1">
                <div class="text-sm text-muted-foreground">LOCATION</div>
                <div class="">{{ event.address }}</div>
              </div>
              <div class="space-y-1">
                <div class="text-sm text-muted-foreground">DATE</div>
                <div class="">{{ event.start_date }}</div>
              </div>
              <div class="space-y-1">
                <div class="text-sm text-muted-foreground">REQUESTS</div>
                <div class="">{{ event.requests_count }}</div>
              </div>
              <div class="space-y-1">
                <div class="text-sm text-muted-foreground">EARNING</div>
                <div class="">₦{{ formatMoney(event.earnings ?? 0) }}</div>
              </div>
              <NuxtLink
                :to="`events/${event.id}/event-details`"
                class="block w-full border"
              >
                <UiButton :variant="'secondary'" class="w-full">
                  Open
                </UiButton>
              </NuxtLink>
            </div>
          </CollapsibleContent>
        </CollapsibleRoot>

        <div
          v-if="!onDone && meta"
          class="pt-6 pb-2 w-full flex justify-center"
        >
          <TablePagination
            :page="meta?.current_page || 1"
            :per_page="meta?.per_page || DEFAULT_PAGE_LIMIT"
            :total="meta?.total || 0"
            @page-change="onPageChange"
          />
        </div>
      </div>

      <div class="min-h-[297px] grid place-items-center" v-if="!events.length">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No events yet
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You haven’t completed any event yet. Once you do, your events will
            appear here
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ChevronDown } from "lucide-vue-next";
import TableContainer from "~/components/table/container.vue";
import { XCircle } from "lucide-vue-next";
import type { ApiResponse } from "~/types";
import type { EventHistory } from "~/types/event";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";

const heading = ref(["EVENT", "LOCATION", "DATE", "REQUESTS", "EARNING"]);
const currentPage = ref(1);
const perPage = ref(DEFAULT_PAGE_LIMIT);

const props = defineProps<{
  onDone?: (event?: EventHistory) => void;
}>();
const { data, status } = useCustomFetch<ApiResponse<EventHistory>>(
  "/past/events",
  {
    params: computed(() => ({
      page: currentPage.value,
      per_page: perPage.value,
    })),
    watch: [currentPage, perPage],
    immediate: true,
    onResponse: (data) => {
      props.onDone?.(data.response._data?.data);
    },
  }
);

const meta = computed(() => {
  return data.value?.data?.meta_data;
});

function onPageChange(page: number) {
  currentPage.value = page;
}

const events = computed(() => data.value?.data?.event_details ?? []);
</script>
