<template>
  <div class="container py-20">
    <div class="flex gap-x-2 items-center fixed top-24">
      <SharedBackButton :to="'/order-history'" />
      <h1 class="text-2xl font-medium font-display">Fund Wallet</h1>
    </div>
    <div class=" bg-white/5 border rounded-3xl p-6 max-w-md mx-auto mt-20 text-center">
        <h1 class="text-2xl font-semibold mb-4">Wallet Top-up</h1>
        <div class="mt-6">
            <FundWallet />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FundWallet from "~/components/forms/fund-wallet.vue";
</script>
    