<template>
  <div>
      <div class="lg:w-[70%] md:w-[70%] sm:w-[70%] mx-auto flex lg:overflow-x-auto md:overflow-x-auto sm:overflow-x-auto lg:flex md:flex sm:flex lg:flex-row md:flex-row sm:flex-row items-stretch gap-x-2 text-center">
        <div
          class="md:block w-40"
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
              @click="followUser(item.id)"
            >
              FOLLOW
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
import Button from "../../components/ui/button.vue";

const props = defineProps<{ popularHost: { 
  id: number | string;
  name: string; 
  followers: number | string;
  sprEvents: number | string;
  following: boolean;
}[] }>();

const {
  followUser,
  following,
  unFollowUser,
  unfollowing,
  subOrUnsubscribeUser,
  subscribing,
} = useFollowActions();

</script>
