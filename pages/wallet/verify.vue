<template>
    <div class="max-w-md mx-auto mt-20 text-center">
      <p v-if="loading">Verifying payment...</p>
  
      <div v-else>
        <h1 v-if="status === 'success'" class="text-green-600 text-xl">
          Payment Successful 🎉
        </h1>
  
        <h1 v-else class="text-red-600 text-xl">
          Payment Failed ❌
        </h1>
        <p class="mt-4">
          <a href="/order-history" class="text-blue-500 underline">Go to Spin Credit</a>
        </p>
      </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const {
        $repo: { event },
        $config: {
          public: { API_BASE_URL },
        },
    } = useNuxtApp();

    const route = useRoute()
    const reference = route.query.reference as string
    
    const loading = ref(true)
    const status = ref<'success' | 'failed' | null>(null)
    
    onMounted(async () => {
      if (!reference) return
    
      try {
        const res = await event.verifyFundWalletPayment(reference);
        if(res.data?.status === 'error') {
          status.value = 'failed'
        } else {
          status.value = 'success'
        }
      } catch {
        status.value = 'failed'
      } finally {
        loading.value = false
      }
    })
</script>
    