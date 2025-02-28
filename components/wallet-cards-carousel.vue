<template>
  <div>
    <Carousel :options="{ slidesToScroll: 'auto' }" :onReady="setEmblaApi">
      <template #container>
        <div class="flex flex-row items-stretch gap-x-2">
          <div
            class="space-y-4 rounded-xl p-6 border bg-white/5 shrink-0 w-[90%]"
            v-for="item in wallets"
            :key="item.name"
          >
            <div class="text-muted-foreground">{{ item.name }}</div>
            <div class="text-2xl font-semibold tabular-nums">
              ₦{{ formatMoney(item.value ?? 0) }}
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

defineProps<{ wallets: { name: string; value: number | string }[] }>();
const embla = ref<EmblaCarouselType>();
const setEmblaApi = (api: EmblaCarouselType) => {
  embla.value = api;
};
const { control_list, selected_index, goTo } = useCarouselPagination(embla);
</script>
