<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/dashboard'" />
      <div class="text-2xl font-medium font-display">Previous events</div>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,_minmax(369px,_1fr))] gap-6">
      <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
        <div class="text-muted-foreground">Total Events</div>
        <div class="text-2xl font-semibold">
          {{ total }}
        </div>
      </div>
      <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
        <div class="text-muted-foreground">Total Song Requests</div>
        <div class="text-2xl font-semibold">
          {{ totalSongRequestCount }}
        </div>
      </div>
      <div class="bg-white/5 p-6 rounded-2xl border space-y-2">
        <div class="text-muted-foreground">Total Hype Request</div>
        <div class="text-2xl font-semibold">
          {{ totalHypeRequestCount }}
        </div>
      </div>
    </div>

    <div class="bg-white/5 py-6 px-4 rounded-2xl border mt-10">
      <EventHistoryTable
        v-on:done="
          (events) => {
            total = events?.meta_data.total || 0;
          }
        "
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventHistoryTable from "~/components/table/event-history-table.vue";
import type { ApiResponse } from "~/types";
import { API_KEYS } from "~/utils/constants/apiKeys";

const total = ref(0);

const { data: metricsData } = useCustomFetch<
  ApiResponse<{
    song_requests_count: number;
    hype_requests_count: number;
  }>
>(API_KEYS.PAST_EVENTS_METRICS);

const totalSongRequestCount = computed(
  () => metricsData.value?.data?.song_requests_count ?? 0
);
const totalHypeRequestCount = computed(
  () => metricsData.value?.data?.hype_requests_count ?? 0
);

useSeoMeta({
  title: "Previous events",
});
</script>
