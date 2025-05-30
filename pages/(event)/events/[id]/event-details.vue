<template>
  <div class="container py-20">
    <SharedBackButton to="/events" class="fixed top-24" />
    <SharedLoadingArea
      :loading="!data && event_data_status === 'pending'"
      :error="error"
    >
      <div
        class="grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6"
      >
        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.earnings ?? 0) }}
          </div>
        </div>
        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total song earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.song_earnings ?? 0) }}
          </div>
        </div>

        <div class="space-y-4 rounded-3xl p-6 border bg-white/5">
          <div class="text-muted-foreground">Total hype earnings</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(data?.data?.hype_earnings ?? 0) }}
          </div>
        </div>
      </div>

      <div class="p-6 border bg-white/5 rounded-3xl mt-8">
        <div class="text-2xl font-semibold mb-6">Event Requests</div>
        <EventRequestsTable
          :loading="status === 'pending'"
          :event_requests="requests?.data?.requests ?? []"
          :meta="
            meta
              ? {
                  ...meta,
                  page: meta?.current_page || 1,
                  onPageChange: onPageChange,
                }
              : undefined
          "
          disabled
        />
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import EventRequestsTable from "~/components/table/event-requests-table.vue";
import type { ApiResponse } from "~/types";
import type { EventRequest, LiveEvent } from "~/types/event";
import type { Pagination } from "~/types/pagination";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";
const route = useRoute();
const eventID = computed(() => route.params.id as string);

const currentPage = ref(1);
const perPage = ref(DEFAULT_PAGE_LIMIT);

const { data, status: event_data_status } = useCustomFetch<
  ApiResponse<LiveEvent>
>(`/events/${eventID.value}`);
const {
  data: requests,
  status,
  error,
} = useCustomFetch<ApiResponse<Pagination<EventRequest, "requests">>>(
  `/events/${eventID.value}/requests`,
  {
    params: computed(() => ({
      page: currentPage.value,
      per_page: perPage.value,
    })),
    watch: [currentPage, perPage],
    immediate: true,
  }
);

const meta = computed(() => {
  return requests.value?.data?.meta_data;
});

function onPageChange(page: number) {
  currentPage.value = page;
}

useSeoMeta({
  title: () => data.value?.data?.title ?? "",
});
</script>
