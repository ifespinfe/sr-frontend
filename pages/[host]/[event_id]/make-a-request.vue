<template>
  <div class="container pt-6 pb-[200px]">
    <SharedBackButton :to="`/${host_slug}`" />
    <LoadingArea
      :loading="status === 'pending' || host_events_status === 'pending'"
      :error="error || host_events_error"
    >
      <div class="max-w-[700px] w-full mx-auto">
        <div class="text-primary text-center text-lg">Make a request</div>
        <div class="text-3xl font-semibold text-center font-display mt-2 mb-4">
          Tell me about your request
        </div>
        <RadioGroupRoot
          class="grid grid-cols-[repeat(auto-fit,_minmax(315px,_1fr))] gap-6 my-6"
          v-if="host_events_data?.data?.types"
          v-model="type"
          @update:model-value="handleTypeSelection"
        >
          <RadioGroupItem
            class="p-6 w-full lg:p-8 mx-auto text-left ring ring-input bg-white/10 rounded-2xl transition-colors cursor-pointer data-[state='checked']:ring-primary hover:ring-primary/30"
            v-for="item in host_events_data?.data?.types"
            :key="item.id"
            :value="item.name"
          >
            <div class="flex items-center gap-x-1">
              <SvgIcon name="money" />
              <div class="text-4xl font-bold text-primary tabular-nums">
                ₦{{ formatMoney(item.price) }}
              </div>
            </div>
            <div class="text-2xl font-medium my-4 mb-2 capitalize">
              {{ item.name }} request
            </div>
            <div class="text-muted-foreground">
              {{
                item.name === "song"
                  ? "Request a song and i'll give you credit when it plays"
                  : "Steal the spotlight. Get a shout-out  for yourself or someone."
              }}
            </div>
          </RadioGroupItem>
        </RadioGroupRoot>

        <template v-if="selectedRequestType">
          <HypeRequestForm
            :request="selectedRequestType"
            :event_id="event_id"
            :host_slug="host_slug"
            v-if="selectedRequestType.name === 'hype'"
          />
          <SongRequestForm
            :request="selectedRequestType"
            :event_id="event_id"
            :host_slug="host_slug"
            v-if="selectedRequestType.name === 'song'"
          />
        </template>
      </div>
    </LoadingArea>
  </div>
</template>

<script lang="ts" setup>
import LoadingArea from "~/components/shared/loading-area.vue";
import type { ApiResponse } from "~/types";
import type { HostProfile, MakeARequestRes } from "~/types/user";
import HypeRequestForm from "~/components/forms/hype-request-form.vue";
import SongRequestForm from "~/components/forms/song-request-form.vue";
import { promiseTimeout } from "@vueuse/core";
const route = useRoute();
const host_slug = route.params.host as string;
const event_id = route.params.event_id as string;
const { data, error, status } = useCustomFetch<ApiResponse<HostProfile>>(
  `/user/${host_slug}`
);
const {
  data: host_events_data,
  error: host_events_error,
  status: host_events_status,
} = useCustomFetch<ApiResponse<MakeARequestRes>>(
  `/user/live/event/${host_slug}`
);

watch(host_events_data, (data) => {
  if (data?.data?.types?.length === 1) {
    type.value = data.data.types[0].name;
  }
});

const type = ref("");
const selectedRequestType = computed(() => {
  return host_events_data.value?.data?.types.find(
    (item) => item.name === type.value
  );
});

useSeoMeta({
  title: "Make A Request",
});

const handleTypeSelection = async (type: string) => {
  await promiseTimeout(10);
  const form = document.querySelector(`form#${type}-${event_id}`);
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
