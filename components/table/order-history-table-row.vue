<template>
  <tr class="!h-20 text-muted-foreground" :key="order.id">
    <td>
      <div
        :class="
          cn(
            ' size-10 rounded-full grid place-items-center',
            order.status === 'refunded' ? 'bg-[#38F08D]/15' : 'bg-[#F04438]/15'
          )
        "
      >
        <SvgIcon
          :name="
            order.status === 'refunded'
              ? 'dotted-arrow-down'
              : 'dotted-arrow-up'
          "
        />
      </div>
    </td>
    <td>
      <div class="space-y-p">
        <div class="text-foreground font-semibold">
          {{ order.status === "refunded" ? "-" : "" }} ₦{{
            formatMoney(order.amount ?? 0)
          }}
        </div>
        <div
          :class="
            cn(
              'flex items-center gap-x-px  text-xs',
              order.type === 'hype' ? 'text-[#FF99F1]' : 'text-[#FFEE99]'
            )
          "
        >
          <SvgIcon
            :name="order.type === 'hype' ? 'mic' : 'music'"
            class="scale-50 -ml-1.5"
          />
          <div>{{ order.type === "hype" ? "Hype" : "Song" }} request</div>
        </div>
      </div>
    </td>
    <td>{{ isCredit ? order.date : order.dj }}</td>
    <td>{{ isCredit ? order.response_description : order.payment_gateway }}</td>
    <td v-if="!isCredit">{{ order.date }}</td>
    <td @click="copyText(order.reference)">
      <div class="flex items-center gap-x-2 relative">
        <div
          :class="
            cn(
              'bg-background/30 border py-2 px-4 opacity-0 transition-all -z-10 rounded-3xl text-sm text-center absolute place-center text-foreground',
              copied && 'top-0 -translate-y-full z-10 opacity-100'
            )
          "
        >
          Copied
        </div>
        <div class="w-[220px] overflow-hidden text-ellipsis">
          {{ order.reference }}
        </div>
        <Copy class="size-4" />
      </div>
    </td>
    <td
      :class="{
        'text-[#38F08D]': order.status === 'success',
        'text-[#6DC9FC]': order.status === 'refunded',
        'text-[#E66840]': order.status === 'failed',
      }"
    >
      {{ order.status }}
    </td>
    <td v-if="!!isCredit">{{ order.payment_gateway }}</td>
    <td v-if="!isCredit" class="w-[50x]">
      <ClientOnly>
        <Teleport to="#teleports">
          <div class="absolute h-0 overflow-hidden">
            <RequestReceiptItem
              :request="order_request"
              :event="orderEvent"
              :id="`RECEIPT_PRINT-${order.id}`"
              print
              class="max-w-[550px]"
            />
          </div>
        </Teleport>
      </ClientOnly>

      <UiTooltip
        message="Re-validate payment"
        v-if="order.status === 'pending'"
      >
        <UiButton
          :size="'icon'"
          :variant="'outline'"
          class="relative"
          :loading="loading || validating"
          @click="validatePayment"
        >
          <Loader class="size-4 animate-spin" v-if="validating" />
          <RefreshCcw class="size-4" v-else />
        </UiButton>
      </UiTooltip>

      <UiTooltip message="Download Receipt" v-else>
        <UiButton
          :size="'icon'"
          :variant="'outline'"
          class="relative"
          :loading="loading || converting"
          @click="loadAndDownloadReceipt"
        >
          <Download class="size-4" />
        </UiButton>
      </UiTooltip>
    </td>
  </tr>
</template>

<script lang="ts" setup>
import { Download, Copy, RefreshCcw, Loader } from "lucide-vue-next";
import { promiseTimeout } from "@vueuse/core";
import saveAs from "file-saver";
import type { Order } from "~/types/payment";
import type { EventRequest, OrderEvent } from "~/types/event";
import type { ApiError } from "~/types";
import RequestReceiptItem from "../request-receipt-item.vue";
const props = defineProps<{ order: Order; isCredit?: boolean }>();

const { isCredit } = props || {};

const copied = ref(false);
const copyText = async (text: string) => {
  await navigator.clipboard.writeText(text);
  copied.value = true;
  await promiseTimeout(1200);
  copied.value = false;
};

const {
  $repo: { event, payment },
} = useNuxtApp();

const order_request = ref<EventRequest>();

const orderEvent = computed<OrderEvent>(() => ({
  title: props.order.title,
  address: props.order.address,
  start_date: props.order.start_date,
}));
const loading = ref(false);

const downloadReceipt = (blob: Blob) => {
  saveAs(
    blob,
    `spin-request-receipt-${
      props.order?.title ?? order_request.value?.host?.stage_name ?? ""
    }`
  );
};

const { converting, convertNodeToImage } = useNodeToImage(
  `#RECEIPT_PRINT-${props.order.id}`,
  downloadReceipt,
  []
);

const loadAndDownloadReceipt = async () => {
  try {
    if (order_request.value) {
      convertNodeToImage();
      return;
    }
    loading.value = true;
    const response = await event.fetchRequestDetails(props.order.parent_id);
    loading.value = false;
    if (response.data) {
      order_request.value = response.data;
      nextTick(() => {
        convertNodeToImage();
      });
    }
  } catch (e) {
    loading.value = false;
    const error = e as ApiError;
    const message = error.data?.message ?? "Failed to download receipt";
    showToast({ title: message, variant: "warning" });
  }
};

const emit = defineEmits(["reload"]);

const validating = ref(false);
const validatePayment = async () => {
  try {
    validating.value = true;
    await payment.verifyPayment(props.order.reference);
    validating.value = false;
    emit("reload");
  } catch (err) {
    validating.value = false;
    const error = err as ApiError;
    showToast({
      title: error.data?.message ?? "Verification failed",
      variant: "warning",
    });
  }
};
</script>
