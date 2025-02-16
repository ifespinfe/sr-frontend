<template>
  <header class="flex items-center justify-between container">
    <NuxtLink class="flex items-center gap-x-px" :to="homeRoute">
      <SvgIcon class="scale-75" />
      <div class="text-lg font-semibold font-display hidden sm:block">
        SpinRequest
      </div>
    </NuxtLink>

    <nav class="flex items-center gap-x-2">
      <template v-if="isLoggedIn">
        <UiPopover
          class="relative z-10"
          v-if="auth_user?.role === 'host'"
          to="/wallet"
        >
          <UiButton
            :variant="'ghost'"
            @click.stop
            class="shrink-0 md:space-x-2 !bg-muted"
          >
            <div class="hidden md:block">Share my profile</div>
            <SvgIcon name="qr" class="text-primary" />
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
                :variant="'outline'"
                class="!size-[40px]"
                @click="shareToFacebook"
              >
                <SvgIcon name="facebook" />
              </UiButton>

              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(whatsappShareLink)"
              >
                <SvgIcon name="whatsapp" class="scale-[0.7]" />
              </UiButton>
              <UiButton
                :size="'icon'"
                :variant="'secondary'"
                class="!size-[40px]"
                @click="externalNavigate(tiktokShareLink)"
              >
                <SvgIcon name="tiktok" class="scale-[0.7]" />
              </UiButton>
            </div>
          </template>
        </UiPopover>
        <NuxtLink v-if="auth_user?.role === 'host'" to="/wallet">
          <UiButton
            :variant="'secondary'"
            @click.stop
            class="shrink-0 space-x-2 !bg-muted"
          >
            <div class="hidden sm:block">
              ₦{{ formatMoney(auth_user?.balance ?? 0) }}
            </div>
            <SvgIcon name="wallet" class="text-primary relative scale-75" />
          </UiButton>
        </NuxtLink>

        <NuxtLink to="/audience">
          <UiTooltip message="Search host" :delay="50">
            <Button :size="'icon'" class="!size-[40px]" :variant="'ghost'">
              <Search class="size-5" />
            </Button>
          </UiTooltip>
        </NuxtLink>
        <NotificationMenu />
        <ProfileMenu />
      </template>

      <template v-else>
        <NuxtLink to="/login"> <Button> LOGIN </Button> </NuxtLink>

        <NuxtLink to="/signup">
          <Button :variant="'secondary'"> SIGN UP </Button>
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import { Search } from "lucide-vue-next";

const { isLoggedIn, auth_user } = useAuth();
const homeRoute = computed(() => {
  if (!isLoggedIn.value) return "/";
  return auth_user.value?.role === "audience" ? "/audience" : "/dashboard";
});

const { public: APP_BASE_URL } = useRuntimeConfig();
const link = computed(() => `${APP_BASE_URL}/${auth_user.value?.slug}`);
const title = ref("Here is my spin request profile");

const {
  externalNavigate,
  twitterShareLink,
  whatsappShareLink,
  tiktokShareLink,
  shareToFacebook,
} = useSocialShare(link, title);
</script>
