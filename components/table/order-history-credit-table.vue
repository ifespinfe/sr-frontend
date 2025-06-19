<template>
  <TableContainer
    :heading="heading"
    :data="mergedOrders"
    :loading="status === 'pending'"
    :pagination-meta="{
      page: meta?.current_page || 1,
      per_page: meta?.per_page || DEFAULT_PAGE_LIMIT,
      total: meta?.total || 0,
      onPageChange,
    }"
  >
    <OrderHistoryTableRow
      v-for="(order, index) in mergedOrders"
      :key="index"
      :order="order"
      :is-credit="true"
      @reload="refresh"
    />
    <template #empty>
      <div class="min-h-[297px] grid place-items-center">
        <div class="space-y-4">
          <XCircle class="size-8 block mx-auto" />
          <div class="text-2xl font-semibold text-muted-foreground text-center">
            No Song or Hype Requests Yet
          </div>
          <div class="text-sm text-muted-foreground text-center">
            You haven’t requested a song or hype from the DJ. Once you do, your
            requests will appear here
          </div>
        </div>
      </div>
    </template>
  </TableContainer>
</template>

<script lang="ts" setup>
import TableContainer from "~/components/table/container.vue";
import { XCircle } from "lucide-vue-next";
import { groupBy } from "lodash-es";
import type { ApiResponse } from "~/types";
import type { Order } from "~/types/payment";
import OrderHistoryTableRow from "./order-history-table-row.vue";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";
import type { Pagination } from "~/types/pagination";

interface CreditType {
  amount: string;
  created_at: string;
  description: string;
  event_price: string;
  reference: string;
  type: "credit" | "debit";
}
const currentPage = ref(1);
const perPage = ref(DEFAULT_PAGE_LIMIT);

const heading = ref([
  "",
  "AMOUNT",
  "DATE",
  "DESCRIPTION",
  "TRANSACTION ID",
  // "STATUS",
  // "PAYMENT METHOD",
  // "",
]);

const { data, status, refresh } = useCustomFetch<
  Pagination<CreditType, "transactions">
>("/wallets", {
  params: computed(() => ({
    page: currentPage.value,
    per_page: perPage.value,
  })),
  watch: [currentPage, perPage],
  immediate: true,
});

// console.log("55551ppppp", data?.value?.data);
const meta = computed(() => {
  return data.value?.meta_data;
});

// const groupedOrders = computed(() => {
//   const orders = data.value?.data ?? [];

//   return groupBy(orders, "created_at");
// });

const mergedOrders = computed(() => {
  const orders = data.value?.transactions ?? [];

  return orders?.map((item, idx) => {
    const x: Order = {
      amount: item.amount,
      date: useDateFormat(item.created_at, "DD-MM-YYYY").value,
      dj: "--",
      description: item.description,
      id: (Number(currentPage) || 1) * idx,
      parent_id: 0,
      parent_type: "--",
      payment_gateway: "wallet",
      reference: item.reference,
      response_code: "--",
      response_description: item.description,
      status: "refunded",
      time: item.created_at,
      // @ts-expect-error type err
      type: item.type,
      title: "no title",
      start_date: item.created_at,
      address: "--",
    };

    return x;
  });
});

console.log("orderrrrrrsssrr", mergedOrders.value);

function onPageChange(page: number) {
  currentPage.value = page;
}
</script>
