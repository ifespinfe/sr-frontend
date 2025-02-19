<template>
  <div class="container pb-20 pt-10">
    <SharedBackButton class="fixed top-24" to="/dashboard" />
    <SharedLoadingArea :loading="status === 'pending'" :error="error">
      <div
        :class="
          cn(
            ready_to_print
              ? 'bg-background w-[850px]'
              : ' bg-white/5 max-w-full w-[867px] mx-auto',
            'rounded-3xl border p-4 sm:p-10'
          )
        "
        id="EVENT_SUMMARY"
      >
        <div class="text-3xl font-semibold mb-1">
          {{ data?.data?.event.title }}
        </div>
        <div class="text-muted-foreground">Event sum</div>
        <div class="space-y-4 mt-6">
          <div
            class="p-2 sm:p-4 rounded-xl border bg-white/5 grid gap-y-4 md:grid-cols-[2fr_3fr]"
          >
            <div class="space-y-2">
              <div class="text-muted-foreground">Amount earned</div>
              <div
                class="text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums"
              >
                ₦{{ formatMoney(data?.data?.total_earnings ?? 0) }}
              </div>
            </div>
            <div
              class="space-y-4 pt-4 border-t md:pl-6 md:pt-0 md:border-t-0 md:border-l border-muted-foreground/20"
            >
              <div
                class="grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2"
              >
                <div
                  class="aspect-square rounded-full bg-[#FF99F1]/10 relative"
                >
                  <SvgIcon name="mic" class="place-center scale-50" />
                </div>
                <div class="text-lg font-medium">Hypes</div>
                <div class="text-muted-foreground">
                  {{ data?.data?.event?.types?.hype?.count ?? 0 }} requests
                </div>
                <div class="tabular-nums text-muted-foreground">
                  ₦{{
                    formatMoney(
                      data?.data?.event?.types?.hype?.total_price ?? 0
                    )
                  }}
                </div>
              </div>
              <div
                class="grid grid-cols-[30px_60px_110px_130px] items-center gap-x-2"
              >
                <div
                  class="aspect-square rounded-full bg-[#FF99F1]/10 relative"
                >
                  <SvgIcon name="music" class="place-center scale-50" />
                </div>
                <div class="text-lg font-medium">Songs</div>
                <div class="text-muted-foreground">
                  {{ data?.data?.event?.types?.song?.count ?? 0 }} requests
                </div>
                <div class="tabular-nums text-muted-foreground">
                  ₦{{
                    formatMoney(
                      data?.data?.event?.types?.song?.total_price ?? 0
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-4"
          >
            <div
              class="p-4 rounded-2xl bg-white/5 border"
              v-for="item in eventDetails"
              :key="item.name"
            >
              <div class="space-y-px">
                <div class="text-muted-foreground">{{ item.name }}</div>
                <div>{{ item.value }}</div>
              </div>
            </div>
          </div>
          <div class="rounded-3xl border p-4 bg-white/5">
            <div class="flex justify-between items-center mb-4">
              <div class="text-lg font-semibold">Top Spenders</div>
              <UiButton
                :variant="'ghost'"
                class="gap-x-2 translate-x-4"
                id="SHARE-BUTTON"
                @click="refresh"
              >
                <div>Share</div>
                <SvgIcon name="share" />
              </UiButton>
            </div>
            <div
              class="grid grid-cols-[repeat(auto-fit,_minmax(330px,_1fr))] gap-6"
            >
              <div
                class="grid grid-cols-[10px_1fr_auto] gap-x-2 text-muted-foreground"
                v-for="(spender, index) in data?.data?.top_spenders"
                :key="spender.user_id"
              >
                <div class="text-foreground/80">{{ index + 1 }}.</div>
                <div>{{ spender?.name ?? spender.email }}</div>
                <div>₦{{ formatMoney(spender.total) }}</div>
              </div>
              <div
                class="p-8 text-center col-span-full"
                v-if="!data?.data?.top_spenders?.length"
              >
                Sorry, no one paid for this event.
              </div>
            </div>
          </div>
          <div class="rounded-3xl border p-4 bg-white/5" id="PRICE-HISTORY">
            <PricingHistoryTab :history="data?.data?.price_histories" />
          </div>
          <div
            class="grid grid-cols-[1fr,_auto,_auto,_auto] gap-4 items-center"
            id="ACTION-ROW"
          >
            <UiButton
              :size="'lg'"
              class="uppercase"
              :loading="converting"
              @click="loadEventReceipt"
            >
              Download Receipt
            </UiButton>
            <UiTooltip message="Share to twitter/X">
              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(twitterShareLink)"
              >
                <SvgIcon name="x" />
              </UiButton>
            </UiTooltip>
            <UiTooltip message="Share to whatsapp">
              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(whatsappShareLink)"
              >
                <SvgIcon name="whatsapp" class="scale-[0.7]" />
              </UiButton>
            </UiTooltip>
            <UiTooltip message="Copy link">
              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="copyLink"
              >
                <CopyCheck v-if="copied" class="text-muted-foreground size-4" />
                <Copy v-else class="text-muted-foreground size-4" />
              </UiButton>
            </UiTooltip>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import type { ApiResponse } from "~/types";
import type { EventSummary } from "~/types/event";
import { Copy, CopyCheck } from "lucide-vue-next";
import PricingHistoryTab from "~/components/price-history/tab.vue";
import saveAs from "file-saver";
import { promiseTimeout } from "@vueuse/core";

const route = useRoute();
const { data, error, status, refresh } = useCustomFetch<
  ApiResponse<EventSummary>
>(`/events/receipt/${route.params.id}`);

const APP_BASE_URL = "https://dev.spinrequest.com";

const eventDetails = computed(() => {
  const today = new Date();
  const duration = {
    name: "Duration",
    value: readableTimeDifference(
      data.value?.data?.event.start_date ?? today,
      data.value?.data?.event.end_date ?? today
    ),
  };
  const location = {
    name: "Location",
    value: data.value?.data?.event.address,
  };
  const date = {
    name: "Date",
    value: useDateFormat(
      data.value?.data?.event.start_date,
      "dddd, MMMM D, YYYY"
    ),
  };
  return [duration, location, date];
});

const ready_to_print = ref(false);

const downloadReceipt = (blob: Blob) => {
  saveAs(blob, `spin-event-summary-${data.value?.data?.event?.title ?? ""}`);
};

const { converting, convertNodeToImage } = useNodeToImage(
  "#EVENT_SUMMARY",
  downloadReceipt,
  ["PRICE-HISTORY", "SHARE-BUTTON", "ACTION-ROW"]
);

const loadEventReceipt = async () => {
  ready_to_print.value = true;
  convertNodeToImage();
  await promiseTimeout(1);
  ready_to_print.value = false;
};

const shareTitle = computed(() => {
  return "I just hosted an event on Spin request. Follow me here and put on my post notifcation";
});

const shareLink = computed(() => {
  return `${APP_BASE_URL}`;
});

const {
  copyLink,
  copied,
  whatsappShareLink,
  twitterShareLink,
  externalNavigate,
} = useSocialShare(shareLink, shareTitle);

useSeoMeta({
  title: "Event Earnings",
});
</script>
