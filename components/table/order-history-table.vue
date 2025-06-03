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
      :key="order.id + order.parent_id + order.date + index"
      :order="order"
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
import type { Order } from "~/types/payment";
import OrderHistoryTableRow from "./order-history-table-row.vue";
import type { ApiResponse } from "~/types";
import type { Pagination } from "~/types/pagination";
import { DEFAULT_PAGE_LIMIT } from "~/utils/constants/globals";

const currentPage = ref(1);
const perPage = ref(DEFAULT_PAGE_LIMIT);

const heading = ref([
  "",
  "TRANSACTION",
  "HOST",
  "PAYMENT METHOD",
  "DATE",
  "TRANSACTION ID",
  "STATUS",
  "",
]);

const { data, status, refresh } = useCustomFetch<
  ApiResponse<Pagination<Order, "transactions">>
>("/transactions", {
  params: computed(() => ({
    page: currentPage.value,
    per_page: perPage.value,
  })),
  watch: [currentPage, perPage],
  immediate: true,
  // onResponse: (data) => {
  //   props.onDone?.(data.response._data?.data);
  // },
});

const meta = computed(() => {
  return data.value?.data?.meta_data;
});

const groupedOrders = computed(() => {
  const orders = data.value?.data?.transactions ?? [];
  return groupBy(orders, "parent_id");
});

const mergedOrders = computed(() => {
  return Object.values(groupedOrders.value)
    .reverse()
    .map((item) => {
      return item.reduce((acc, item) => {
        if (!acc.amount) {
          Object.assign(acc, item);
          return acc;
        }
        acc.amount = Number(acc.amount) + Number(item.amount);
        acc.reference = `${acc.reference}-${item.reference}`;
        acc.payment_gateway = `${acc.payment_gateway} + ${item.payment_gateway}`;
        return acc;
      }, {} as Order);
    });
});

function onPageChange(page: number) {
  currentPage.value = page;
}
</script>
