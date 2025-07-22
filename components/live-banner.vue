<template>
  <div class="fixed left-0 right-0 bg-[#FFEE99] py-2 z-[20]">
    <AutoScrollCarousel class="absolute inset-0" v-if="animate">
      <div
        v-for="i in 40"
        :key="i"
        class="font-semibold text-background mx-2 flex items-center gap-x-2"
      >
        <Dot />
        <span>LIVE</span>
      </div>
    </AutoScrollCarousel>
    <div class="container flex justify-between items-center relative z-10">
      <ClientOnly>
        <Button :variant="'outline'" class="min-w-[100px]">{{
          timePassed
        }}</Button>
        <template #fallback>
          <Button :variant="'outline'" class="min-w-[100px]">00:00:00</Button>
        </template>
      </ClientOnly>
      <ConfirmDialog
        :onConfirm="onEndEvent"
        message="Are you sure you want to end this event?"
        v-if="user === 'host'"
      >
        <Button :variant="'destructive'" :ending="ending">END EVENT</Button>
      </ConfirmDialog>
      <slot v-else />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "./ui/button.vue";
import ConfirmDialog from "./modals/confirm-dialog.vue";
import AutoScrollCarousel from "./shared/auto-scroll-carousel.vue";
import { Dot } from "lucide-vue-next";
const props = withDefaults(
  defineProps<{
    startDate?: Date | string;
    onEndEvent?: () => void;
    ending?: boolean;
    user?: "host" | "audience";
    animate?: boolean;
  }>(),
  { user: "host", animate: false }
);

const timePassed = computed(() => {
  const now = useNow();
  const start_date = props.startDate;
  if (!start_date) return "00:00:00";
  return formattedTimeDifference(start_date, now.value, "timer");
});
</script>
