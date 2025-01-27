<template>
  <div class="container pt-6 pb-20">
    <SharedBackButton to="/following" class="relative z-10" />
    <SharedLoadingArea>
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_350px] justify-between gap-6 mt-10 relative"
      >
        <div
          class="fixed left-0 right-0 h-[70vh] top-0 bg-gradient-to-r from-[#4a1520] via-[#462454] to-[#2d4163] opacity-90"
          :style="{
            backgroundImage:
              'linear-gradient(to right, rgb(74, 21, 32) 0%, rgb(70, 36, 84) 50%, rgb(45, 65, 99) 100%)',
          }"
        />

        <div class="relative z-10">
          <div class="grid lg:grid-cols-[auto_1fr] items-center gap-4">
            <Avatar
              class="!size-[120px] md:!size-[180px] xl:!size-[200px] !rounded-3xl !text-4xl"
              :initials="getInitials('DJ Kukuruku')"
            />
            <div class="py-2">
              <div class="font-display text-3xl md:text-4xl font-semibold">
                {{ "DJ kukuruku" }}
              </div>
              <div class="flex flex-wrap gap-4 items-center my-4 mb-6">
                <div class="flex items-center gap-2">
                  <SvgIcon name="account_circle" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{ 234 }}</span>
                    <span class="text-muted-foreground">FOLLOWERS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="celebration" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{ 45 }}</span>
                    <span class="text-muted-foreground">EVENTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{ 10 }}</span>
                    <span class="text-muted-foreground">REQUESTS</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <SvgIcon name="genres" />
                  <div class="flex items-center gap-1">
                    <span class="font-semibold">{{ 4 }}</span>
                    <span class="text-muted-foreground">FUFILLED</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center gap-4">
                <Button
                  :variant="'secondary'"
                  class="w-full md:w-auto"
                  :size="'lg'"
                >
                  Follow
                </Button>

                <Button class="w-full md:w-auto" :size="'lg'">
                  Notify me when Host Goes Live.
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-4 space-y-2 text-muted-foreground relative z-10">
          <div>ABOUT ME</div>
          <div class="max-w-[550px]">
            {{ "here is another bio then bio mobile" }}
          </div>
          <div
            class="inline-flex bg-white/10 items-center rounded-xl p-3 gap-4"
          >
            <SvgIcon name="badge" />
            <div>
              <div class="text-lg font-semibold text-foreground">
                {{ 4 }} of
                {{ 9 }}
              </div>
              <div class="text-muted-foreground">Request fufilled</div>
            </div>
          </div>
        </div>
      </div>
    </SharedLoadingArea>
  </div>
</template>

<script lang="ts" setup>
import Button from "../../components/ui/button.vue";
import Avatar from "~/components/avatar.vue";
</script>
