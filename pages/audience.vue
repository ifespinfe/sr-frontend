<template>
  <div class="container pt-20 h-full relative">
    <div
      class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
    ></div>
    <div class="max-w-full w-[600px] mx-auto">
      <div
        class="font-display text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        Search for hosts, users, or friends
      </div>

      <HostSearchInput />
    </div>
    <ClientOnly>
      <HotLiveEventsCarousel :hotEvents="hotEventsList" v-if="hotEventsList.length > 0" />
      <PopularHostCarousel :popularHost="popularHostList" v-if="popularHostList.length > 0" />
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const { data, status } = useCustomFetch<Wallet>("/hot-live-event");
const hotEventsList = computed(() => {
  return data?.value?.data;
});

const { data: hosts, status: hosts_status } = useCustomFetch<Wallet>("/popular-hosts");
const popularHostList = computed(() => {
  return hosts?.value?.data;
});

useSeoMeta({ title: "Request A Song or Hype" });
</script>
