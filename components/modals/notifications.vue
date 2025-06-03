<template>
  <div
    class="fixed inset-x-0 bottom-0 bg-black z-[20] bg-cover px-2 md:px-4"
    style="height: calc(100dvh - 74px)"
  >
    <div class="mt-8 max-w-[1400px] mx-auto">
      <!-- content -->
      <div class="px-0 md:px-6 max-w-5xl" role="dialog" aria-modal="true">
        <!-- header -->
        <div class="mb-5 text-start flex items-start">
          <Button
            :variant="'ghost'"
            @click="($event) => $emit('close')"
            class=""
          >
            X
          </Button>
          <div class="text-3xl font-semibold">Notifications</div>
        </div>
        <!-- notifications -->
        <div
          class="bg-[#A799FF10] space-y-2.5 text-white rounded-lg px-4 max-h-[76vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb:hover]:bg-gray-500"
          v-if="prepareNotifications.length"
        >
          <div
            v-for="item in prepareNotifications"
            :key="item.id"
            :class="!item.read_at ? 'bg-[#FFFFFF1A]' : 'bg-[#FFFFFF0D]'"
            class="rounded-3 border border-[#38373A] px-2 py-2 rounded-lg flex items-center gap-3 justify-start"
          >
            <!-- icon -->
            <div class="shrink-0 mb-auto">
              <div
                class="!rounded-full !p-2"
                :style="{
                  backgroundColor: item.read_at
                    ? '#FFFFFF0D'
                    : item?.data?.icon === 'exclamation'
                    ? '#E6684033'
                    : item?.data?.icon === 'mic_2'
                    ? '#FF99F11A'
                    : '#FFEE991A',
                }"
              >
                <SvgIcon
                  :name="item.data.icon + (item.read_at ? `_default` : ``)"
                />
              </div>
            </div>

            <div class="w-full">
              <!-- label and time -->
              <div class="w-full flex justify-between items-start gap-4">
                <h5 class="font-medium text-base capitalize">
                  {{ item?.data?.message }}
                </h5>
                <div
                  class="pt-1 text-muted-foreground text-sm font-normal shrink-0 flex gap-2 items-start"
                >
                  <!-- <span class="hidden md:inline-block">
                    {{ useDateFormat(item.created_at, "DD MMM, hh:mmA") }}
                  </span> -->
                  <span class="tracking-wide">
                    {{ useTimeAgo(item.created_at) }}</span
                  >
                  <SvgIcon
                    v-if="!item.read_at"
                    name="red_dot"
                    class="ms-2 mt-1"
                  />
                </div>
              </div>

              <div
                v-if="item?.data?.details || item?.data?.icon == 'exclamation'"
                class="w-full mt-1"
              >
                <p class="text-muted-foreground">
                  {{ item?.data?.details }}
                </p>

                <div
                  class="mt-4 flex items-start gap-3 md:gap-4 flex-wrap font-medium text-sm"
                  v-if="item?.data?.icon == 'exclamation'"
                >
                  <NuxtLink
                    class="text-primary flex items-center gap-x-1"
                    to="/following"
                  >
                    <span class="shrink-0">REQUEST AGAIN</span> <ChevronRight />
                  </NuxtLink>

                  <NuxtLink
                    class="text-primary flex items-center gap-x-1"
                    to="/following"
                  >
                    <span class="shrink-0">VIEW CREDITS</span> <ChevronRight />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- loading -->
        <div
          v-if="!prepareNotifications.length && loading"
          class="my-10 flex w-full justify-center items-center"
        >
          <Loader class="size-6 animate-spin" />
        </div>

        <!-- no notifications -->
        <div
          class="border bg-popover text-white rounded-lg p-4 grid place-items-center place-center"
          v-if="!prepareNotifications.length && !loading"
        >
          <Inbox />
          <div>No notifications</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../ui/button.vue";
import SvgIcon from "../svg-icon.vue";
import { Loader, Edit2, ChevronRight, Inbox } from "lucide-vue-next";

interface Notification {
  id: string | number;
  type: string;
  notifiable_type: string;
  notifiable_id: string | number;
  data: {
    message: string;
    status: string;
    type: string;
    details?: string;
    refund_amount?: string;
    icon?: "music_note" | "mic_2" | "exclamation" | "bell" | string;
  };
  read_at: string | null;
  created_at: string;
  updated_at: string;
}
const props = defineProps<{
  notifications: Notification[];
  loading: boolean;
}>();

console.log("wellllll", props.notifications);
const prepareNotifications = computed(() => {
  for (let i = 0; i < props.notifications.length; i++) {
    if (props.notifications[i].data.status == "rejected")
      props.notifications[i].data.icon = "exclamation";
    else if (props.notifications[i].data.type == "hype")
      props.notifications[i].data.icon = "mic_2";
    else if ((props.notifications[i].data.type = "song"))
      props.notifications[i].data.icon = "music_note";
    else props.notifications[i].data.icon = "bell";
  }
  return props.notifications;
});

onMounted(() => {
  document.body.classList.add("no-scroll");
});
onUnmounted(() => {
  document.body.classList.remove("no-scroll");
});
</script>
