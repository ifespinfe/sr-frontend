<template>
  <div v-if="events?.length">
    <Carousel :options="{ slidesToScroll: 'auto' }" :onReady="setEmblaApi">
      <template #container>
        <div class="flex flex-row items-stretch gap-x-2">
          <CreateEventCard class="w-[90%] shrink-0" />
          <EventCard
            class="w-[90%] shrink-0"
            v-for="event in events"
            :key="event.id"
            :event="event"
            @done="emit('done')"
            @delete="emit('delete', event.id)"
          />
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
  <CreateEventCard v-else />
</template>

<script lang="ts" setup>
import type { LiveEvent } from "~/types/event";
import Carousel from "./shared/carousel.vue";
import EventCard from "./cards/event-card.vue";
import CreateEventCard from "./cards/create-event-card.vue";
import type { EmblaCarouselType } from "embla-carousel";

defineProps<{ events: LiveEvent[] }>();
const embla = ref<EmblaCarouselType>();
const setEmblaApi = (api: EmblaCarouselType) => {
  embla.value = api;
};
const emit = defineEmits<{ done: []; delete: [id: number | string] }>();

const { control_list, selected_index, goTo } = useCarouselPagination(embla);
</script>
