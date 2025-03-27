<template>
   <div class="max-w-full lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto mt-12">
      <div
      class="flex flex-row font-display text-2xl md:text-2xl font-semibold mb-5 mt-20 justify-between"
      >
        <div class="flex c">
          <SvgIcon name="popular" /> Popular Hosts
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

 
 
   <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto relative text-center">
      <div 
          class="flex flex-row overflow-x-auto lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto xs:overflow-x-auto touch-pan-x" 
          ref="popular_hosts"
        >
        <div
          ref="popular_hosts_item"
          class="carousel-item"
          v-for="item in popularHost"
          :key="item.name"
        >
          <NuxtLink
            :to=" '/'+item.slug"
            class=""
          >
            <div>
              <img :src=item.profile_picture class="rounded-full p-2 border h-40 w-40"/>
            </div>
          </NuxtLink>
          
          <div class="mt-2 font-medium text-base">{{ item.name }}</div>
          <div class="text-muted-foreground mt-2">{{ item.followers }} Followers . {{ item.events }} Events</div>
          <div class="mt-4">
            <button 
              v-if="!item.is_following" 
              class="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring h-10 px-10"
              @click="followHost(item.id)"
            >
              FOLLOW
            </button>

            <button 
              v-if="item.is_following" 
              class="uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring h-10 px-10"
              @click="unFollowHost(item.id)"
            >
              UNFOLLOW
            </button>
           
          </div>
        </div>
      </div>
    <div
      class="mt-6 p-2 flex items-center justify-center gap-x-2 z-10 relative"
    >
    </div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from "./shared/carousel.vue";
import type { EmblaCarouselType } from "embla-carousel";
import Button from "./components/ui/button.vue";
import SvgIcon from "./components/svg-icon.vue";

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

const followHost = (id) => {
  followUser(id);
  for (let i = 0; i < props.popularHost.length; i++) {
    props.popularHost[i].is_following = true;
  }
};

const unFollowHost = (id) => {
  unFollowUser(id);
  for (let i = 0; i < props.popularHost.length; i++) {
    props.popularHost[i].is_following = false;
  }
};

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
