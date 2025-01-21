<template>
  <div class="bg-white/5 rounded-3xl border p-6">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-semibold">Share profile</div>
      <SvgIcon name="spin-logo" />
    </div>

    <div class="flex justify-between gap-x-2 mt-16 items-stretch">
      <div
        class="border rounded-full bg-white/5 relative px-4 py-2 hover:bg-white/10"
      >
        www.spinrequest/djspinal
      </div>
      <UiButton
        :size="'icon'"
        :variant="'outline'"
        class="!h-full aspect-square"
      >
        <Copy class="size-4" />
      </UiButton>
      <UiButton :size="'icon'" :variant="'outline'">
        <Share2 class="size-4" />
      </UiButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Copy, Share2 } from "lucide-vue-next";
</script>
