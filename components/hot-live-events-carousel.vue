<template>
  <div class="container mx-auto max-w-[1085px]">
    <div class="mb-4 flex flex-row font-display justify-between">
      <div class="flex text-2xl font-medium">
        <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-6 mt-1 me-2"
          >
            <path
              fill-rule="evenodd"
              d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
              clip-rule="evenodd"
            />
          </svg> -->
        <span class="me-2">🔥</span> Hot Live Events
      </div>

      <div class="order-last hidden invisible md:block md:visible">
        <Button
          :variant="'ghost'"
          class="!rounded-full border !p-2 me-3 prev"
          @click="prev"
        >
          <SvgIcon name="arrow_back_ios" />
        </Button>

        <Button
          :variant="'ghost'"
          class="!rounded-full border !p-2 next"
          @click="next"
        >
          <SvgIcon name="arrow_forward_ios" />
        </Button>
      </div>
    </div>

    <div class="relative">
      <div
        class="absolute top-0 bottom-0 right-0 w-14 z-[5]"
        style="
          background: linear-gradient(
            270deg,
            hsl(224 71.4% 4.1%) 31.47%,
            rgba(17, 16, 20, 0) 100%
          );
        "
      ></div>

      <Carousel
        ref="carouselRef"
        :items-to-show="'auto'"
        :gap="20"
        breakpoint-mode="carousel"
        :breakpoints="{
          1000: {
            itemsToShow: 6,
            snapAlign: 'start',
          },
          800: {
            itemsToShow: 5,
            snapAlign: 'start',
          },
          700: {
            itemsToShow: 4,
            snapAlign: 'start',
          },
          650: {
            itemsToShow: 4,
            snapAlign: 'start',
          },
          600: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
          500: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
          400: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
          300: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          200: {
            itemsToShow: 1,
            snapAlign: 'start',
          },
          100: {
            itemsToShow: 1,
            snapAlign: 'start',
          },
        }"
      >
        <Slide v-for="(item, idx) in mutatedHotevents" :key="item.id">
          <NuxtLink
            class="block group w-full h-full overflow-hidden"
            :to="`/${item.slug}`"
          >
            <div class="mb-3.5">
              <div
                class="py-2 px-1 hot-live carousel__item !aspect-square overflow-hidden rounded-2xl border-2 group-hover:border-sp-purple transition-all duration-75 ease-in relative"
              >
                <span
                  class="rounded-full bg-white/2 p-2 border text-xs bg-white/15 tracking-wide relative z-[2]"
                >
                  {{ item.timePassed }}
                </span>
                <img
                  :alt="item.name"
                  :src="getImageByIndex(idx + 1)"
                  style="position: absolute; inset: 0"
                />
              </div>
            </div>
            <div
              class="mb-1.5 font-medium text-base leading-[1.2] tracking-wide group-hover:text-sp-purple-200 transition-all duration-75 ease-in"
            >
              {{ item.name }}
            </div>
            <div
              class="pb-4 flex flex-row gap-1.5 items-start text-muted-foreground text-sm font-[400]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3.5 shrink-0 mt-[3px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {{ item.location }}
            </div>
          </NuxtLink>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "./ui/button.vue";
import SvgIcon from "./svg-icon.vue";
import type { HotLiveEventsListItem } from "~/types/audience";
import image1 from "../assets/images/event1.png";
import image2 from "../assets/images/event2.png";
import image3 from "../assets/images/event3.png";
import image4 from "../assets/images/event4.png";
import image5 from "../assets/images/event5.png";
import image6 from "../assets/images/event6.png";
import image7 from "../assets/images/event7.png";
import image8 from "../assets/images/event8.png";
import image9 from "../assets/images/event9.png";
import image10 from "../assets/images/event10.png";

const carouselRef = ref();
const currentSlide = ref(1);

const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();

const props = defineProps<{
  hotEvents: HotLiveEventsListItem[];
}>();

const mutatedHotevents = computed(() => {
  for (let i = 0; i < props.hotEvents.length; i++) {
    const now = useNow();
    const startDate = props.hotEvents[i].time || "00:00:00";

    props.hotEvents[i].timePassed = formattedTimeDifference(
      // "2025-04-12 18:31:02",
      startDate,
      now.value,
      "timer"
    );
  }
  // console.log(props.hotEvents);
  return props.hotEvents;
});

function getImageByIndex(index: number): string {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  // if index is within range (converting from 1-based to 0-based index)
  if (index >= 1 && index <= images.length) {
    return images[index - 1];
  }

  // if index is out of range, return a random image
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}
</script>

<style scoped>
.hot-live {
  background-image: url("/images/audience-carousel.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
}

.touch-pan-x {
  touch-action: pan-x;
}
.carousel-item {
  margin-right: 20px;
}

@media screen and (min-width: 992px) {
  .carousel-item {
    display: block;
    flex: 0 0 calc(100% / 5);
    margin-right: 20px;
  }
}

@media screen and (min-width: 576px) and (max-width: 991px) {
  .carousel-item {
    display: block;
    flex: 0 0 calc(100% / 3);
    margin-right: 20px;
  }
}

@media screen and (min-width: 0px) and (max-width: 575px) {
  .carousel-item {
    display: block;
    flex: 0 0 calc(100% / 2);
    margin-right: 20px;
  }
}
</style>
