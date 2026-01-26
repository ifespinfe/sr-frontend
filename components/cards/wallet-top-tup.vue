<template>
    <div
      class="border bg-white/5 mt-8 p-6 rounded-2xl grid grid-cols-[56px_1fr_40px] lg:grid-cols-[56px_1fr_auto_40px] gap-x-4 items-center relative"
    >
      <div
        class="aspect-square border bg-white/10 rounded-full grid place-items-center"
      >
        <SvgIcon name="money" />
      </div>
      <div class="space-y-px">
        <div class="font-medium">Wallet Top-up</div>
        <div class="text-muted-foreground max-w-[350px]">
          You can fund your wallet here
        </div>

        <div class="text-xl lg:hidden font-semibold">
          <button
            @click="geToFundWallet"
            class="border rounded-full w-[194px] py-3 bg-white/1 hover:bg-white/1 transition-colors text-center font-semibold"
            style="background-color: #a799ff"
          >
            Fund Wallet
          </button>
        </div>
      </div>
      <div class="text-1xl font-semibold hidden lg:block">
        <button
          @click="geToFundWallet"
          class="border rounded-full w-[194px] py-3 bg-white/1 hover:bg-white/1 transition-colors text-center font-semibold"
          style="background-color: #a799ff"
        >
          Fund Wallet
        </button>
      </div>
      <SvgIcon name="right-caret" v-if="!hideCaret" />
    </div>
  </template>
  
  <script lang="ts" setup>
    const {
        $config: {
          public: { APP_BASE_URL },
        },
    } = useNuxtApp();
    const geToFundWallet = () => {
      const url = new URL(
        `${APP_BASE_URL}/wallet/fund-wallet`
      );
      window.location.href = url.href;
    };
    const { hideCaret = false } = defineProps<{ hideCaret?: boolean }>();
  </script>
  