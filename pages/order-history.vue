<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/audience'" />
      <h1 class="text-2xl font-medium font-display">Order History</h1>
    </div>
    <Wallet hide-caret />
    <WalletTopUp hide-caret />
    <div class="bg-white/5 border rounded-3xl p-6 mt-8">
      <TabsRoot class="space-y-6" default-value="all">
        <TabsList
          class="flex gap-x-px items-center justify-start border max-w-fit p-1 rounded-full"
          aria-label="How to use spin request"
        >
          <TabsTrigger
            class="border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground"
            value="all"
            as-child
          >
            <button>All History</button>
          </TabsTrigger>

          <TabsTrigger
            class="border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground"
            value="credit"
            as-child
          >
            <button>Credit History</button>
          </TabsTrigger>

          <!-- <TabsTrigger
            class="border rounded-full w-[194px] py-3 bg-white/5 hover:bg-white/10 transition-colors text-muted-foreground text-center font-semibold data-[state=active]:border-transparent data-[state=active]:bg-primary data-[state=active]:text-foreground"
            value="fund"
            as-child
          >
            <button>Fund Wallet</button>
          </TabsTrigger> -->
        </TabsList>
        <TabsContent
          class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4"
          value="all"
        >
          <OrderHistoryTable />
        </TabsContent>
        <TabsContent
          class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4"
          value="credit"
        >
          <OrderHistoryCreditTable />
        </TabsContent>
        <!-- <TabsContent
          class="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-4"
          value="fund"
        >
          <FundWallet />
        </TabsContent> -->
      </TabsRoot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Wallet from "~/components/cards/wallet.vue";
import WalletTopUp from "~/components/cards/wallet-top-tup.vue";
import OrderHistoryTable from "~/components/table/order-history-table.vue";
import OrderHistoryCreditTable from "~/components/table/order-history-credit-table.vue";
// import FundWallet from "~/components/forms/fund-wallet.vue";

const activeTab = ref<"all" | "credit">("all");

useSeoMeta({
  title: "Order History",
});
</script>
