<template>
  <div class="fixed h-screen inset-0 bg-black z-[1000] bg-cover \">
    <div
      class="flex items-start justify-center min-h-screen mt-24 text-center w:"
    >
      <div
        class="lg:w-[60%] md:w-[70%] sm:w-[100%] xs:w-[100%] shadow-xl p-6"
        role="dialog"
        aria-modal="true"
      >
        <div class="text-start mb-3 flex items-start">
          <Button
            :variant="'ghost'"
            @click="($event) => $emit('close')"
            class=""
          >
            X
          </Button>
          <div class="text-3xl font-semibold">Notifications</div>
        </div>
        <div
          class="border bg-popover text-white rounded-lg p-4 shadow-lg max-h-[65vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb:hover]:bg-gray-500"
          v-if="prepareNotifications.length"
        >
          <!-- <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="music_note" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">Song request was accepted</p>
                            <p class="text-muted-foreground font-normal">
                                Dj focati is now playing Oyinmo by Youngiduu
                            </p>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                    <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2 md:me-3 sm:me-3 xs:me-3">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="exclamation" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">Sorry, your Song was not played</p>
                            <div class="text-muted-foreground font-normal">
                                Omolile by Shazzy wasn't played by DJ Focati. Hosts often have specific preferences, 
                                so we've refunded $80 as Spin Credit for future requests. Try sending another request and we'll do our best to get it heard!

                                <div class="flex mt-2">
                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>REQUEST AGAIN</span> <ChevronRight />
                                    </NuxtLink>

                                    <NuxtLink
                                        class="text-primary flex items-center gap-x-1"
                                        to="/following"
                                    >
                                        <span>VIEW CREDITS</span> <ChevronRight />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div>

                    <div class="bg-[#38373A] text-start rounded-3 border p-2 w-[100%] rounded-lg flex justify-between mb-2">
                        <div class="w-[10%] me-2">
                            <Button :variant="'ghost'"
                                class="!rounded-full border !p-2"
                                style="background-color: #E6684033"
                            >
                                <SvgIcon name="mic_2" />
                            </Button>
                        </div>
                        <div class="w-[70%]">
                            <p class="font-semibold text-base">
                            Song request was accepted
                            </p>
                            <p class="text-muted-foreground font-normal">
                                Dj focati is now playing Oyinmo by Youngiduu
                            </p>
                        </div>
                        <div class="w-[20%] text-muted-foreground text-xs flex justify-end">
                            <span>Just now</span> <SvgIcon name="red_dot" class="ms-2 mt-1" />
                        </div>
                    </div> -->

          <div
            v-for="item in prepareNotifications"
            :key="item.id"
            :class="item.read_at == null ? 'bg-[#38373A]' : 'bg-white/5'"
            class="flex items-center gap-4 rounded-3 border p-2 rounded-lg"
          >
            <div class="shrink-0">
              <Button
                :variant="'destructive'"
                class="!rounded-full border !p-2"
                style="background-color: #e6684033"
              >
                <SvgIcon :name="item.data.icon" />
              </Button>
            </div>

            <div
              class="w-full text-start flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2"
            >
              <div class="w-full">
                <p class="font-semibold text-base">
                  {{ item?.data?.message }}
                </p>
                <div class="text-muted-foreground font-normal">
                  {{ item?.data?.details }}

                  <div
                    class="flex flex-col sm:flex-row mt-2 gap-2"
                    v-if="item?.data?.icon == 'exclamation'"
                  >
                    <NuxtLink
                      class="text-primary flex items-center gap-x-1"
                      to="/following"
                    >
                      <span>REQUEST AGAIN</span> <ChevronRight />
                    </NuxtLink>

                    <NuxtLink
                      class="text-primary flex items-center gap-x-1"
                      to="/following"
                    >
                      <span>VIEW CREDITS</span> <ChevronRight />
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div
                class="w-full md:w-[25%] text-muted-foreground text-xs flex justify-start md:justify-end"
              >
                <span>
                  {{ useDateFormat(item.created_at, "Do MMM, YY") }}
                  {{ useDateFormat(item.created_at, "HH:mm AA") }}</span
                >
                <SvgIcon name="red_dot" class="ms-2 mt-1" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="border bg-popover text-white rounded-lg p-4 grid place-items-center place-center"
          v-if="!prepareNotifications.length"
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

const props = defineProps<{
  notifications: {
    id: string | number;
    type: string;
    notifiable_type: string;
    notifiable_id: string | number;
    data: {
      message: string;
      status: string;
      type: string;
      details: string;
      refund_amount: string;
      icon?: string;
    };
    read_at: string | null;
    created_at: string;
    updated_at: string;
  }[];
}>();

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
</script>
