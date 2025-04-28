<template>
  <TableContainer
    :heading="heading"
    :data="mergedOrders"
    :loading="status === 'pending'"
  >
    <OrderHistoryTableRow
      v-for="(order, index) in mergedOrders"
      :key="order.id + order.parent_id + order.date + index"
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

const heading = ref([
  "",
  "AMOUNT",
  "DATE",
  "DESCRIPTION",
  "TRANSACTION ID",
  "STATUS",
  "PAYMENT METHOD",
  "",
]);

const { data, status, refresh } =
  useCustomFetch<ApiResponse<Order[]>>("/transactions");

const groupedOrders = computed(() => {
  const orders = data.value?.data ?? [];
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
    })
    .filter((item) => item.status?.toLowerCase() === "refunded");
});
</script>
