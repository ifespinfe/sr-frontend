<template>
  <div>
    <Carousel :options="{ slidesToScroll: 'auto' }" :onReady="setEmblaApi">
      <template #container>
        <div class="flex flex-row items-stretch gap-x-2 text-center">
          <div
            class="p-1 shrink-0 w-[20%]"
            v-for="item in popularHost"
            :key="item.name"
          >
            <div
            class="rounded-full p-2 border h-40 bg-linear-to-bl from-violet-500 to-fuchsia-500"
            >
            </div>
            <div class="mt-2 font-semibold">{{ item.name }}</div>
            <div class="text-muted-foreground mt-2">{{ item.followers }} Followers . {{ item.sprEvents }} Events</div>
            <div class="mt-4">
              <button class="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring h-10 px-10"
              >follow</button>
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

defineProps<{ popularHost: { 
  name: string; 
  followers: number | string;
  sprEvents: number | string;
  //following: boolean;
}[] }>();
const embla = ref<EmblaCarouselType>();
const setEmblaApi = (api: EmblaCarouselType) => {
  embla.value = api;
};
const { control_list, selected_index, goTo } = useCarouselPagination(embla);
</script>
