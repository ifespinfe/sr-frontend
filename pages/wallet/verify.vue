<template>
    <div class=" bg-white/5 border rounded-3xl p-6 max-w-md mx-auto mt-20 text-center">
      <p v-if="loading">Verifying payment...</p>
  
      <div v-else>
        <h1 v-if="status === 'success'" class="text-green-600 text-xl">
          Payment Successful 🎉
        </h1>
  
        <h1 v-else class="text-red-600 text-xl">
          Payment Failed ❌
        </h1>
        <div class="flex items-center justify-center mt-8 gap-4">
          <SharedBackButton :to="'/order-history'" />
          <h1 class="text-2xl font-medium font-display">Go to Spin Credit</h1>
        </div>
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
    