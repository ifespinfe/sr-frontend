<template>
    <div class="">
        <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto flex lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto lg:flex md:flex sm:flex lg:flex-row md:flex-row sm:flex-row items-stretch gap-x-2">
          <div
            class="md:block w-40"
            v-for="item in mutatedHotevents"
            :key="item.name"
          >
            <NuxtLink
              :to=" '/events/'+item.id"
            >
              <div
                class="rounded-xl p-2 border h-48 hot-live"
                >
                <span 
                  class="text-muted-foreground rounded-full bg-white/2 p-2 border text-xs"
                >
                  {{ item.timePassed }}
                </span>
              </div>

              <div class="mt-2 font-medium text-base">{{ item.name }}</div>
              <div
                class="flex flex-row text-muted-foreground mt-2 text-xs font-normal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 me-1">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg> {{ item.location }}
              </div>
            </NuxtLink>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Carousel from "./shared/carousel.vue";
import type { EmblaCarouselType } from "embla-carousel";
const props = defineProps<{ hotEvents: { 
    name: string; 
    time: string;
    location: string;
  }[] }>();

const embla = ref<EmblaCarouselType>();
const setEmblaApi = (api: EmblaCarouselType) => {
  embla.value = api;
};
const { control_list, selected_index, goTo } = useCarouselPagination(embla);

const mutatedHotevents = computed(() => {
  for (let i = 0; i < props.hotEvents.length; i++) {
    const now = useNow();
    const startDate = props.hotEvents[i].time;
    if (!startDate) return "00:00:00";
    props.hotEvents[i].timePassed = formattedTimeDifference(startDate, now.value);
  }
  return props.hotEvents;
});
</script>

<style scoped>
  .hot-live {
    background-image: url('/images/audience-carousel.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px;
  }
</style>
