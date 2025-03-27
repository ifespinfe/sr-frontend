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
    <HotLiveEventsCarousel :hotEvents="hotEventsList" />

    <div class="max-w-full lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto mt-12">
      <div
        class="flex flex-row font-display text-2xl md:text-2xl font-semibold text-start mb-5"
      >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 mt-1 me-2">
        <path d="M0 24.68H24V0.68H0V24.68Z" fill="white"/>
      </svg> Popular Host
      </div>
    </div>
    <PopularHostCarousel :popularHost="popularHostList" />
  </div>
</template>

<script lang="ts" setup>
const { data, status, error } = useCustomFetch<Wallet>("/hot-live-event");
const hotEventsList = computed(() => {
  return data.value.data.hot_live_events;
});

const hosts = useCustomFetch<Wallet>("/popular-hosts");
const popularHostList = computed(() => {
  return hosts.data.value.data.popular_hosts;
});

useSeoMeta({ title: "Request A Song or Hype" });
</script>
