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
                
            >
                <SvgIcon name="arrow_back_ios" />
            </Button>
            <Button :variant="'ghost'"
            >
            </Button>
            
            <Button :variant="'ghost'"
                class="!rounded-full border !p-2 next"

            >
                <SvgIcon name="arrow_forward_ios" />
            </Button>
        </div>
      </div>
    </div>
    

    <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto relative">
        <div 
          class="flex flex-row overflow-x-auto lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto xs:overflow-x-auto touch-pan-x" 
          ref="hot_live_events"
        >
          <div 
            ref="hot_live_events_item"
            class="carousel-item"  
            v-for="item in mutatedHotevents" :key="item.id">
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
import { onMounted, ref, shallowRef } from 'vue';
import Button from "./components/ui/button.vue";
import SvgIcon from "./svg-icon.vue";

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

// const hot_live_events_item = ref()
// const observer = shallowRef()

// onMounted(() => {
//   observer.value = new ResizeObserver(
//     entries => {
//       hot_live_events_item.value.width = enteries[0].ccontentRect.width
//     }
//   )
//   const ob = observer.value.observe(hot_live_events_item.value)
//   console.log(ob)
// });
// const carouselContainer = useTemplateRef('hot-live-events');
// const carouselItem = useTemplateRef('hot-live-events-item');
// const carouselContainerWidth = carouselContainer.scrollWidth;
// const carouselItemWidth = carouselItem.offsetWidth;

// const root = ref(null);

// // console.log(root.hot-live-events);
// const carouselContainer = ref();
// const carouselItem = ref();

// // onCreated = (() => {
// //   window.addEventListener("resize", screenWidth);
// // });


// const screenWidth =(() => {
//   carouselContainer = this.$refs.hot-live-events?.offsetWidth;
//   carouselItem = this.$refs.hot-live-events-item?.offsetWidth;
// });

// const carouselContainerWidth = carouselContainer.scrollWidth;
// const carouselItemWidth = carouselItem.offsetWidth;

// let scrollPosition = 0;
// // console.log(carouselContainer.clientWidth);
// const next = () => {
  
//   if (window.matchMedia("(min-width: 992px)").matches) {

//     if (scrollPosition < (carouselContainerWidth - carouselItemWidth * 5)) { //check if you can go any further
//         scrollPosition += carouselItemWidth;  //update scroll position
//         carouselContainer.animate({ scrollLeft: scrollPosition }, 600); //scroll left
//     }
//   } else if (window.innerWidth < 992 || window.innerWidth > 576 ) {
//     if (scrollPosition < (carouselContainerWidth - carouselItemWidth * 3)) { //check if you can go any further
//         scrollPosition += carouselItemWidth;  //update scroll position
//         carouselContainer.animate({ scrollLeft: scrollPosition }, 600); //scroll left
//     }
//   } else {
//     if (scrollPosition < (carouselContainerWidth - carouselItemWidth * 2)) { //check if you can go any further
//         scrollPosition += carouselItemWidth;  //update scroll position
//         carouselContainer.animate({ scrollLeft: scrollPosition }, 600); //scroll left
//     }
//   }
// }

// const prev = () => {
//   if (window.matchMedia("(min-width: 992px)").matches) {
//     if (scrollPosition > 0) {
//         scrollPosition -= carouselItemWidth;
//         carouselContainer.animate(
//         { scrollLeft: scrollPosition }, 600);
//     }
//   } else if (window.innerWidth < 992 || window.innerWidth > 576 ) {
//     if (scrollPosition > 0) {
//         scrollPosition -= carouselItemWidth;
//         carouselContainer.animate(
//         { scrollLeft: scrollPosition }, 600);
//     }
//   } else {
//     if (scrollPosition > 0) {
//         scrollPosition -= carouselItemWidth;
//         carouselContainer.animate(
//         { scrollLeft: scrollPosition }, 600);
//     }
//   }
// }
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
