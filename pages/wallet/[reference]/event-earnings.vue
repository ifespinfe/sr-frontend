<template>
  <div class="container py-20">
    <SharedBackButton to="/wallet" class="fixed top-20" />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        class="grid md:grid-cols-3 lg:grid-cols-[2fr,_1fr,_1fr] gap-6 bg-white/5 border p-6 rounded-3xl"
      >
        <div class="space-y-2">
          <div class="text-[#38F08D]">Withdrawable balance</div>
          <div class="text-4xl font-semibold">
            ₦{{ formatMoney(data?.data?.earning ?? 0) }}
          </div>
        </div>
        <div
          class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start"
        >
          <div class="text-muted-foreground">Event earnings</div>
          <div class="text-lg font-medium">
            ₦{{ formatMoney(data?.data?.event_earnings ?? 0) }}
          </div>
        </div>

        <div
          class="flex items-center gap-2 md:flex-col md:space-x-0 md:items-start"
        >
          <div class="text-muted-foreground">
            Commissions ({{ data?.data?.commission_percent ?? 0 }} %)
          </div>
          <div class="text-lg font-medium">
            ₦{{ formatMoney(data?.data?.commission ?? 0) }}
          </div>
        </div>
      </div>

      <div
        class="bg-white/5 p-6 rounded-3xl grid md:grid-cols-2 gap-y-4 gap-x-20 mt-6"
      >
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Event Name</div>
            <div class="font-semibold">
              {{ data?.data?.title }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Date</div>

            <div class="font-semibold">
              {{
                data?.data?.date
                  ? useDateFormat(data?.data?.date ?? "", "YY-MM-DD")
                  : "-"
              }}
            </div>
          </div>
          <div
            class="flex items-center gap-2 justify-between relative"
            @click="copyTransactionID(data?.data?.reference ?? '')"
          >
            <div class="absolute left-0 translate-x-full">
              <div
                class="py-2 px-4 bg-background border rounded-full animate-in slide-in-from-top-3"
                v-if="copied"
              >
                Copied
              </div>
            </div>
            <div class="text-muted-foreground">Transaction id</div>
            <div class="flex items-center gap-x-1 cursor-pointer">
              <Copy class="size-4 shrink-0" />
              <div
                class="shrink-0 text-ellipsis line-clamp-1 max-w-fit overflow-hidden text-nowrap font-medium"
              >
                {{ data?.data?.reference ?? "" }}
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Date</div>

            <div class="font-semibold">
              {{
                data?.data?.date
                  ? useDateFormat(data?.data?.date ?? "", "YY-MM-DD")
                  : "-"
              }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Time</div>
            <div class="font-semibold">
              {{
                data?.data?.date
                  ? useDateFormat(data?.data?.date ?? "", "HH:mm")
                  : "-"
              }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-muted-foreground">Status</div>
            <div class="font-semibold">{{ data?.data?.status ?? "" }}</div>
          </div>
        </div>
      </div>

      <div class="p-6 border bg-white/5 rounded-3xl mt-8">
        <div class="text-2xl font-semibold mb-6">Event Requests</div>
        <EventRequestsTable
          :loading="status === 'pending'"
          :event_requests="data?.data?.history ?? []"
          disabled
        />
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import EventRequestsTable from "~/components/table/event-requests-table.vue";
import type { ApiResponse } from "~/types";
import type { EventTransactionDetails } from "~/types/event";
import { Copy } from "lucide-vue-next";
import { promiseTimeout } from "@vueuse/core";
const route = useRoute();
const reference = computed(() => route.params.reference as string);
const { data, status, error } = useCustomFetch<
  ApiResponse<EventTransactionDetails>
>(`/wallets/event/history/${reference.value}`);

useSeoMeta({
  title: () => data.value?.data?.title ?? "Earnings",
});
const copied = ref(false);
const copyTransactionID = async (id: string) => {
  await navigator.clipboard.writeText(id);
  copied.value = true;
  await promiseTimeout(1200);
  copied.value = false;
};
</script>
