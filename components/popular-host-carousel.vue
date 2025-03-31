<template>
   <div class="max-w-full lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto mt-12">
      <div
      class="flex flex-row font-display text-2xl md:text-2xl font-semibold mb-5 mt-20 justify-between"
      >
        <div class="flex c">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-6 mt-1 me-2">
              <path d="M0 24.68H24V0.68H0V24.68Z" fill="white"/>
          </svg> Popular Hosts
        </div>

        <div class="order-last invisible lg:visible md:visible">
          <Button :variant="'ghost'"
              class="!rounded-full border !p-2 me-3 prev"
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

 
 
   <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto relative text-center pb-10">
      <Carousel 
        ref="carouselRef" 
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
            itemsToShow: 3,
            snapAlign: 'start',
          },
          300: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          200: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          100: {
            itemsToShow: 2,
            snapAlign: 'start',
          }
        }"
      >
        <Slide v-for="item in popularHost" :key="item.id">
          <div class="carousel__item">
            <NuxtLink
              :to=" '/'+item.slug"
              class=""
            >
              <div>
                <img :src=item.profile_picture class="rounded-full p-2 border mx-auto h-20 w-20 lg:h-40 lg:w-40 md:h-40 md:w-40 sm:h-40 sm:w-40"/>
              </div>
            </NuxtLink>
          
            <div class="mt-2 font-medium text-base">{{ item.name }}</div>
            <div class="text-muted-foreground mt-2">{{ item.followers }} Followers . {{ item.events }} Events</div>
            <div class="mt-4">
              <button 
                class="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring h-10 px-10"
                @click="toggleFollow(item.id, item.is_following)"
              >
                {{ !item.is_following ? 'FOLLOW' : 'UNFOLLOW'}}
              </button>
            </div>
          </div>
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

const props = defineProps<{ popularHost: { 
  id: number | string;
  name: string; 
  followers: number | string;
  sprEvents: number | string;
  following: boolean;
}[] }>();

const {
  followUser,
  unFollowUser
} = useFollowActions();

const toggleFollow = (id, status) => {
  if(!status) {
    followUser(id)
    toggleIsFollowing(id, true)
  } else { 
    unFollowUser(id);
    toggleIsFollowing(id, false)
  }
};

const toggleIsFollowing = (id, status) => {
  for (let i = 0; i < props.popularHost.length; i++)
  if(props.popularHost[i].id == id) {
    props.popularHost[i].is_following = status;
  }
}

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
