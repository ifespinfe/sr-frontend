<template>
  <div
    class="container py-20 flex flex-wrap justify-center gap-10 items-start relative"
  >
    <div class="w-full md:w-[416px] text-center">
      <h3 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold">
        Level Up Your Gigs & Get Paid
      </h3>
    </div>
    <div class="w-full max-w-[616px] grid gap-y-4 relative z-10">
      <div
        class="bg-sp-purple/50 blur-[200px] size-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]"
      ></div>
      <div
        class="p-6 md:p-8 rounded-3xl border backdrop-blur-lg bg-background"
        v-for="item in highlights"
        :key="item.icon"
      >
        <div
          class="grid place-items-center ring ring-muted size-[56px] rounded-full shadow-lg"
        >
          <SvgIcon :name="item.icon" />
        </div>
        <div class="mt-4 space-y-2">
          <h2 class="font-display text-3xl">{{ item.title }}</h2>
          <p class="text-muted-foreground">
            {{ item.subtitle }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-[200px] left-0 right-0 rotate-[-3deg] border-t-2 border-b-2 py-4 bg-white/5 text-primary"
    >
      <AutoScrollCarousel>
        <div
          v-for="i in 30"
          :key="i"
          class="font-semibold mx-2 flex items-center gap-x-2"
        >
          <Dot />
          <span>HYPEMAN</span>
          <Dot />
          <span>MCS</span>
          <Dot />
          <span>HOSTS</span>
          <Dot />
          <span>OAPS</span>
          <Dot />
          <span>DJS</span>
        </div>
      </AutoScrollCarousel>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AutoScrollCarousel from "../shared/auto-scroll-carousel.vue";
import { Dot } from "lucide-vue-next";
const highlights = ref([
  {
    icon: "money-mouth",
    title: "Turn requests to revenue",
    subtitle:
      "Monetize your sets by charging for song requests and hype shouts. Set your own prices and maximize your earning potential!",
  },
  {
    icon: "woman-dancing",
    title: "Engaged Crowd, Seamless Flow",
    subtitle:
      "Keep your audience hyped by letting them take centre stage with requests. SpinRequest streamlines the process, making it easy to manage requests without interrupting your flow. Focus on delivering an exceptional performance while the party stays pumped.",
  },
  {
    icon: "pink-heart",
    title: "Grow Your Fan Base",
    subtitle:
      "Get discovered by a wider audience! SpinRequest allows you to build your following, attracting new fans who appreciate your interaction and crowd control.",
  },
]);
</script>
