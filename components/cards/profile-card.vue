<template>
  <div class="bg-white/5 rounded-3xl border p-6">
    <div class="flex items-center justify-between">
      <div class="text-2xl font-semibold">Share profile</div>
      <SvgIcon name="spin-logo" />
    </div>

    <div class="flex justify-between gap-x-2 mt-16 items-center relative">
      <div class="place-center z-10" v-if="copied">
        <div
          class="px-4 py-2 bg-background rounded-full z-10 animate-in slide-in-from-bottom-1 relative"
        >
          Copied
        </div>
      </div>
      <div class="border rounded-full bg-white/5 relative px-4 py-2">
        <div class="overflow-hidden text-ellipsis line-clamp-1">
          {{ profileLink }}
        </div>
      </div>
      <div class="flex gap-x-2 items-center shrink-0">
        <UiButton :size="'icon'" :variant="'outline'" @click="copyLink">
          <Copy class="size-4" />
        </UiButton>
        <UiPopover>
          <UiButton :size="'icon'" :variant="'outline'">
            <Share2 class="size-4" />
          </UiButton>
          <template #content>
            <div class="flex gap-x-2 items-center">
              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(twitterShareLink)"
              >
                <SvgIcon name="x" />
              </UiButton>

              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(whatsappShareLink)"
              >
                <SvgIcon name="whatsapp" class="scale-[0.7]" />
              </UiButton>
            </div>
          </template>
        </UiPopover>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Copy, Share2 } from "lucide-vue-next";
const title = ref("Here is my spinRequest profile");
const props = defineProps<{ username: string }>();
const {
  public: { APP_BASE_URL },
} = useRuntimeConfig();

const profileLink = computed(() => `${APP_BASE_URL}/${props.username}`);
const {
  copyLink,
  copied,
  externalNavigate,
  twitterShareLink,
  whatsappShareLink,
} = useSocialShare(profileLink, title);
</script>
