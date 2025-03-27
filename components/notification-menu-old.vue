<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger asChild>
      <Button :variant="'ghost'" class="!rounded-full border !p-2">
        <Loader class="animate-spn size-3" v-if="loading" />
        <SvgIcon name="bell" v-else />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal class="mx-auto">
      <DropdownMenuContent
        class="z-[150] min-w-[98vw] sm:min-w-[36rem] overflow-hidden rounded-xl border bg-popover space-y-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      >
        <div
          class="flex justify-between items-center border-b py-4 px-4 sm:px-8"
        >
          <div class="text-2xl font-semibold">Notifications</div>
          <!-- <Button :size="'icon'" :variant="'ghost'">
            <X />
          </Button> -->
        </div>
        <div class="h-[364px] overflow-auto pb-2 space-y-1">
          <DropdownMenuItem
            asChild
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div
              class="flex items-center gap-x-4 relative px-2 sm:px-6 py-3 hover:bg-white/5 cursor-pointer transition-colors [&:hover_.check-button]:inline-flex"
            >
              <div class="bg-white/10 p-2 rounded-full">
                <SvgIcon name="bell" />
              </div>
              <div class="space-y-1">
                <div>{{ notification?.data?.message }}</div>
                <div class="flex items-center gap-x-2 text-[#C3C3C3]">
                  <div>
                    {{ useDateFormat(notification.created_at, "Do MMM, YY") }}
                  </div>
                  <div class="size-[6px] rounded-full bg-[#C3C3C3]"></div>
                  <div>
                    {{ useDateFormat(notification.created_at, "HH:mm AA") }}
                  </div>
                </div>
              </div>
              <div
                class="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 check-button sm:hidden"
              >
                <Tooltip message="Mark as read">
                  <Button
                    :size="'icon'"
                    :variant="'outline'"
                    class="animate-in slide-in-from-top-1"
                    :loading="updating[notification.id]"
                    @click.stop="markNotificationAsRead(notification.id)"
                  >
                    <Check class="size-5" />
                  </Button>
                </Tooltip>
              </div>
            </div>
          </DropdownMenuItem>
          <div
            class="space-y-2 grid place-items-center place-center"
            v-if="!notifications.length"
          >
            <Inbox />
            <div>No new notifications</div>
          </div>
          <div class="place-center" v-if="loading">
            <Loader class="animate-spin" />
          </div>
        </div>
        <div
          class="px-2 sm:px-6 py-2 border-t flex justify-end"
          v-if="notifications.length"
        >
          <Button
            :variant="'outline'"
            :loading="clearing"
            @click="markAllNotificationsAsRead"
          >
            Mark all as read
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import { useNotifications } from "./notification";
import SvgIcon from "./svg-icon.vue";
import Button from "./ui/button.vue";
import Tooltip from "./ui/tooltip.vue";
import { Check, X, Inbox, Loader } from "lucide-vue-next";
const {
  notifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  loading,
  clearing,
  updating,
} = useNotifications();
</script>
