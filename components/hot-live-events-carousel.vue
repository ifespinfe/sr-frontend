<template>
    <div class="max-w-full lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto mt-12">
      <div
      class="flex flex-row font-display text-2xl md:text-2xl font-semibold mb-5 mt-20 justify-between"
      >
        <div class="flex c">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 mt-1 me-2">
              <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clip-rule="evenodd" />
          </svg> Hot Live Events
        </div>

        <div class="order-last">
          <Button :variant="'ghost'"
                class="!rounded-full border !p-2 prev"
                @click="prev"
            >
                <SvgIcon name="arrow_back_ios" />
            </Button>
           
            
            <Button :variant="'ghost'"
                class="!rounded-full border !p-2 next"
                @click="next"
            >
                <SvgIcon name="arrow_forward_ios" />
            </Button>
        </div>
      </div>
    </div>
    

    <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto relative">
      <Carousel 
        ref="carouselRef" 
        v-model="currentSlide" 
        v-bind="config"
        :items-to-show="6"
        breakpoint-mode="carousel"
        :breakpoints="{
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
            itemsToShow: 2,
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
          }
        }"
      >
        <Slide v-for="item in mutatedHotevents" :key="item.id">
          <NuxtLink
              :to=" '/events/'+item.id"
            >
              <div
              class="rounded-xl p-2 border h-48 hot-live carousel__item"
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
        </Slide>
      </Carousel>

    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Button from "./ui/button.vue";
import SvgIcon from "./svg-icon.vue";

const carouselRef = ref()
const currentSlide = ref(1)

const next = () => carouselRef.value.next()
const prev = () => carouselRef.value.prev()

const props = defineProps<{ hotEvents: { 
    name: string; 
    time: string;
    location: string;
  }[] }>();

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
    width: 170px;
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
