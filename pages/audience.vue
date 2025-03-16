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

    <div class="max-w-full lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto mt-12">
      <div
      class="flex flex-row font-display text-2xl md:text-2xl font-semibold text-start mb-5 mt-20"
      >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mt-1 me-2">
            <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
          </svg> Hot Live Events
      </div>
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
//console.log(valuen.data.value.data.popular_hosts);
const popularHostList = computed(() => {
  return hosts.data.value.data.popular_hosts;
});

useSeoMeta({ title: "Request A Song or Hype" });
</script>
