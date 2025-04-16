<template>
  <div class="container mx-auto max-w-[1085px]">
    <div class="mb-4 flex flex-row font-display justify-between">
      <div class="flex text-2xl font-medium">
        <!-- <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          class="size-6 mt-1 me-2"
        >
          <path d="M0 24.68H24V0.68H0V24.68Z" fill="white" />
        </svg> -->
        <span class="me-3">🎛️ </span> Popular Hosts
      </div>

      <div class="order-last invisible lg:visible md:visible">
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

    <div class="w-full relative">
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
        <Slide v-for="item in popularHost" :key="item.id">
          <div class="h-full w-full overflow-hidden">
            <NuxtLink :to="'/' + item.slug" class="">
              <AvatarRoot
                class="bg-muted inline-flex w-full rounded-full aspect-square font-medium leading-1 uppercase select-pointer justify-center overflow-hidden align-middle relative border-2 hover:border-sp-purple transition-all duration-75 ease-in"
              >
                <AvatarImage
                  :src="item?.profile_picture"
                  class="h-full w-full object-cover"
                  v-if="item?.profile_picture"
                />
                <AvatarFallback
                  v-if="!item?.profile_picture"
                  class="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full items-center text-center px-2 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                >
                  {{ getInitials(item?.name ?? "") }}
                </AvatarFallback>
              </AvatarRoot>
            </NuxtLink>

            <div
              class="mt-4 mb-1 leading-[1.2] font-medium text-lg text-center"
            >
              {{ item.name }}
            </div>
            <div
              class="mb-4 text-muted-foreground text-sm font-normal text-center"
            >
              {{ item.followers }} Followers . {{ item.events }} Events
            </div>

            <div class="flex justify-center w-full">
              <button
                class="w-fit uppercase inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 border border-ring h-10 px-6"
                @click="toggleFollow(item.id, item.is_following)"
              >
                {{ !item.is_following ? "FOLLOW" : "UNFOLLOW" }}
              </button>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Button from "./ui/button.vue";
import SvgIcon from "./svg-icon.vue";
import type { PopularHostsListItem } from "~/types/audience";

const carouselRef = ref();
const currentSlide = ref(1);

const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();

const props = defineProps<{
  popularHost: PopularHostsListItem[];
}>();

const { followUser, unFollowUser } = useFollowActions();

const toggleFollow = (id: number | string, status: boolean) => {
  if (!status) {
    followUser(id);
    toggleIsFollowing(id, true);
  } else {
    unFollowUser(id);
    toggleIsFollowing(id, false);
  }
};

const toggleIsFollowing = (id: number | string, status: boolean) => {
  for (let i = 0; i < props.popularHost.length; i++)
    if (props.popularHost[i].id == id) {
      props.popularHost[i].is_following = status;
    }
};
</script>

<style scoped>
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
