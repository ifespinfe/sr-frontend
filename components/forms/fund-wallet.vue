<template>
    <div class="max-w-md mx-auto mt-20 mb-20 p-6 border rounded">
      <h1 class="text-xl font-semibold mb-4">Fund Wallet</h1>
  
      <input
        v-model="amount"
        type="number"
        placeholder="Enter amount (₦)"
        class="w-full border p-3 rounded mb-4"
        style="background-color: #1c202a;"
      />
  
      <button
        @click="fundWallet"
        :disabled="loading"
        class="w-full bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors"
      >
        {{ loading ? 'Redirecting...' : 'Proceed' }}
      </button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const {
        $repo: { event },
        $config: {
        public: { APP_BASE_URL, API_BASE_URL },
        },
    } = useNuxtApp();
    const amount = ref<number | null>(null)
    const loading = ref(false)
    
    const fundWallet = async () => {
      if (!amount.value || amount.value < 100) {
        alert('Minimum amount is ₦100')
        return
      }
    
      loading.value = true
      const url = new URL(
        `${APP_BASE_URL}/wallet/verify`
      );
      const payload = {
        redirect_url: url.href,
        type: 'gateway',
        gateway: "paystack",
        amount: amount.value,
    };
    
    try {
        const fund_wallet_response = await event.fundWallet(
            payload
        );

        if (fund_wallet_response?.data?.redirect_url) {
            // await navigateTo(fund_wallet_response.data.redirect_url, {
            // external: true,
            // });
            window.location.href = fund_wallet_response.data.redirect_url
        }
    } catch (err) {
        throw new Error("Failed")
    } finally {
        loading.value = false
    }
}
</script>
    