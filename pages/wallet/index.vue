<template>
  <div class="container py-20">
    <SharedBackButton to="/dashboard" class="fixed top-6" />
    <SharedLoadingArea
      class="space-y-4"
      :error="error"
      :loading="status === 'pending'"
    >
      <div class="bg-white/5 border rounded-3xl">
        <div class="p-6 grid md:grid-cols-[65px,_1fr,_auto] gap-6">
          <div
            class="aspect-square rounded-full bg-white/5 place-items-center hidden md:grid"
          >
            <SvgIcon name="wallet" class="text-muted-foreground" />
          </div>
          <div class="space-y-2">
            <div class="flex gap-x-1 items-center text-muted-foreground">
              <div>Wallet Balance</div>
              <UiPopover
                content="This is your earnings minus commission. resets Back to zero after payout weekly."
              >
                <Info class="size-4" />
              </UiPopover>
            </div>
            <div class="tabular-nums font-semibold text-4xl">
              ₦{{ formatMoney(Number(data?.wallet_balance ?? 0)) }}
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-x-4 flex-wrap justify-between">
              <div class="flex items-center text-muted-foreground gap-x-2">
                <div class="size-3 rounded-full bg-[#38F08D]"></div>
                <div>Weekly Earnings</div>
              </div>
              <div
                class="flex items-center text-muted-foreground gap-x-2 justify-self-end"
              >
                <div>₦{{ formatMoney(data?.current_week_earnings ?? 0) }}</div>
                <UiPopover content="The total amount you’ve made this week.">
                  <Info class="size-4" />
                </UiPopover>
              </div>
            </div>
            <div class="flex items-center gap-x-4 flex-wrap justify-between">
              <div class="flex items-center text-muted-foreground gap-x-2">
                <div class="size-3 rounded-full bg-[#E66840]"></div>
                <div>Commision</div>
              </div>
              <div
                class="flex items-center text-muted-foreground gap-x-2 justify-self-end"
              >
                <div>
                  -₦{{ formatMoney((data?.current_week_commission ?? 0) * 1) }}
                </div>
                <UiPopover
                  content="A 15% platform fee to support the services we provide."
                >
                  <Info class="size-4" />
                </UiPopover>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 border rounded-b-[inherit] bg-white/10">
          <div class="flex justify-center gap-x-1">
            <SvgIcon name="bell" class="shrink-0 text-destructive" />
            <div class="text-muted-foreground text-center">
              Your wallet balance is automatically sent to your bank account ({{
                data?.account ?? ""
              }}) every Tuesday
            </div>
          </div>
        </div>
      </div>

      <div
        class="hidden sm:grid sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6"
      >
        <div
          class="space-y-4 rounded-3xl p-6 border bg-white/5"
          v-for="item in walletBreakdown"
          :key="item.name"
        >
          <div class="text-muted-foreground">{{ item.name }}</div>
          <div class="text-2xl font-semibold tabular-nums">
            ₦{{ formatMoney(item.value) }}
          </div>
        </div>
      </div>
      <div class="sm:hidden">
        <WalletCardsCarousel :wallets="walletBreakdown" />
      </div>

      <HostEarnings />

      <div class="bg-white/5 border rounded-3xl p-6 mt-8">
        <div class="text-2xl font-semibold mb-6">Transaction History</div>
        <WalletHistoryTable
          :loading="status === 'pending'"
          :history="data?.data ?? []"
        />
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import WalletHistoryTable from "~/components/table/wallet-history-table.vue";
import HostEarnings from "~/components/cards/host-earnings.vue";
import { Info } from "lucide-vue-next";
import type { Wallet } from "~/types/payment";

const { data, status, error } = useCustomFetch<Wallet>("/wallets");

const walletBreakdown = computed(() => {
  return [
    {
      name: "Total earnings",
      value: data.value?.total_earnings ?? 0,
    },
    {
      name: "Total song requests earnings",
      value: data.value?.song_earnings ?? 0,
    },
    {
      name: "Total hype requests earnings",
      value: data.value?.hype_earnings ?? 0,
    },
  ];
});

useSeoMeta({
  title: "Wallet",
});
</script>
