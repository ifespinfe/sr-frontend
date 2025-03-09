<template>
  <div>
    <div
      class="flex flex-row font-display text-2xl md:text-2xl font-semibold text-start mb-2 mt-20"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
        </svg> Hot Live Events
    </div>

    <Carousel :options="{ slidesToScroll: 'auto' }" :onReady="setEmblaApi">
      <template #container>
        <div class="flex flex-row items-stretch gap-x-2">
          <div
            class="p-1 shrink-0 w-[30%]"
            v-for="item in hotEvents"
            :key="item.name"
          >
            <div
            class="rounded-xl p-2 border h-48 bg-linear-to-bl from-violet-500 to-fuchsia-500"
            >
              <span 
                class="text-muted-foreground rounded-full bg-white/10 p-2 border text-xs"
              >
                {{ item.time }}
              </span>
            </div>
            <div class="mt-2 font-semibold">{{ item.name }}</div>
            <div class="text-muted-foreground mt-2">
              <span class="flew flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg> 
              {{ item.location }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
    
    <div
      class="mt-6 p-2 flex items-center justify-center gap-x-2 z-10 relative"
    >
      <div
        :class="
          cn(
            'size-3 rounded-full transition-all',
            selected_index === index ? 'bg-primary' : 'bg-muted'
          )
        "
        v-for="(item, index) in control_list"
        :key="item + index"
        @click="() => goTo(index)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from "./shared/carousel.vue";
import type { EmblaCarouselType } from "embla-carousel";

defineProps<{ hotEvents: { 
  name: string; 
  time: string;
  location: string;
}[] }>();
const embla = ref<EmblaCarouselType>();
const setEmblaApi = (api: EmblaCarouselType) => {
  embla.value = api;
};
const { control_list, selected_index, goTo } = useCarouselPagination(embla);
</script>
