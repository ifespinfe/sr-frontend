<template>
  <div class="container py-32 relative">
    <div class="relative">
      <div
        class="bg-sp-purple/50 blur-[200px] size-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
      ></div>

      <div class="mb-20 max-w-[480px] mx-auto">
        <h1
          class="mb-6 w-full font-display text-2xl md:text-3xl font-semibold text-center tracking-wider"
        >
          Search for Hosts, Users, or Friends
        </h1>

        <HostSearchInput />
      </div>
    </div>

    <div class="mb-12">
      <HotLiveEventsCarousel
        :hotEvents="hotEventsList"
        v-if="hotEventsList && hotEventsList.length > 0"
      />
    </div>

    <PopularHostCarousel
      :popularHost="popularHostList"
      v-if="popularHostList && popularHostList.length > 0"
    />
  </div>
</template>

<script lang="ts" setup>
import type {
  HotLiveEventsListItem,
  PopularHostsListItem,
} from "~/types/audience";

const { data } = useCustomFetch<{ data: HotLiveEventsListItem[] }>(
  "/hot-live-event",
  {
    server: true,
    lazy: false,
  }
);
const hotEventsList = computed(() => {
  return data?.value?.data;
});

const { data: hosts } = useCustomFetch<{
  data: PopularHostsListItem[];
}>("/popular-hosts", {
  server: true,
  lazy: false,
});
const popularHostList = computed(() => {
  return hosts?.value?.data;
});

useSeoMeta({ title: "Request A Song or Hype" });
</script>
