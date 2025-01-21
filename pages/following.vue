<template>
  <div class="container pt-16 pb-40 relative">
    <div class="max-w-full w-[1112px] mx-auto">
      <div
        class="flex gap-x-2 items-center text-muted-foreground fixed top-24 z-10"
      >
        <SharedBackButton to="/profile" />
        <div class="font-display text-lg sm:text-xl font-semibold ml-2">
          Following
        </div>
        <Dot class="size-12" />
        <div class="text-lg sm:text-xl shrink-0">0 people</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Dot } from "lucide-vue-next";
</script>
