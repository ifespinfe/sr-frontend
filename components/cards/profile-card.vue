<template>
  <div class="bg-white/5 rounded-3xl border p-6">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-semibold">Share profile</div>
      <SvgIcon name="spin-logo" />
    </div>

    <div class="flex justify-between gap-x-2 mt-16 items-center relative">
      <div
        class="px-4 py-2 bg-background rounded-full place-center z-10 animate-in fade-in-0"
        v-if="copied"
      >
        Copied
      </div>
      <div class="border rounded-full bg-white/5 relative px-4 py-2">
        <div class="overflow-hidden text-ellipsis line-clamp-1">
          www.spinrequest/djspinall
        </div>
      </div>
      <div class="flex gap-x-2 items-center">
        <UiButton :size="'icon'" :variant="'outline'" @click="copyLink">
          <Copy class="size-4" />
        </UiButton>
        <UiButton :size="'icon'" :variant="'outline'">
          <Share2 class="size-4" />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Copy, Share2 } from "lucide-vue-next";

const link = ref(" www.spinrequest/djspinall");
const title = ref("Here is my spinRequest profile");
const { copyLink, copied } = useSocialShare(link, title);
</script>
