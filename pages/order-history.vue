<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/audience'" />
      <h1 class="text-2xl font-medium font-display">Order History</h1>
    </div>
    <Wallet hide-caret />
    <div class="bg-white/5 border rounded-3xl p-6 mt-8">
      <div class="text-2xl font-semibold mb-6 flex items-center gap-4">
        <h3
          role="button"
          tabindex="0"
          class="hover:text-primary cursor-pointer select-none"
          :class="
            cn({
              'underline underline-offset-4 text-primary': activeTab === 'all',
            })
          "
          @click="activeTab = 'all'"
        >
          All transactions
        </h3>
        &bull;
        <h3
          role="button"
          tabindex="0"
          class="hover:text-primary cursor-pointer select-none"
          :class="
            cn({
              'underline underline-offset-4 text-primary':
                activeTab === 'credit',
            })
          "
          @click="activeTab = 'credit'"
        >
          Credit
        </h3>
      </div>
      <OrderHistoryTable v-if="activeTab === 'all'" />
      <OrderHistoryCreditTable v-if="activeTab === 'credit'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Wallet from "~/components/cards/wallet.vue";
import OrderHistoryTable from "~/components/table/order-history-table.vue";
import OrderHistoryCreditTable from "~/components/table/order-history-credit-table.vue";

const activeTab = ref<"all" | "credit">("all");

useSeoMeta({
  title: "Order History",
});
</script>
