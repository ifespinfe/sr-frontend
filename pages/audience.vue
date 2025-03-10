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

    <div class="max-w-full w-[900px] mx-auto">
      <HotLiveEventsCarousel :hotEvents="hotEventsList" />
    </div>

    <div class="max-w-full w-[900px] mx-auto mt-12">
      <div
        class="font-display text-2xl md:text-2xl font-semibold text-start mb-2"
      >
        Popular Host
      </div>
      <PopularHostCarousel :popularHost="popularHostList" />
    </div>


  </div>
</template>

<script lang="ts" setup>
const { data, status, error } = useCustomFetch<Wallet>("/hot-live-event");
const hotEventsList = computed(() => {
  return data.value.data.hot_live_events;
});

const hosts = useCustomFetch<Wallet>("/popular-hosts");
//console.log(valuen.data.value.data.popular_hosts);
const popularHostList = computed(() => {
  return hosts.data.value.data.popular_hosts;
});

useSeoMeta({ title: "Request A Song or Hype" });
</script>
