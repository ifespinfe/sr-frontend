<template>
  <div>
    <Button :variant="'ghost'" class="!rounded-full border !p-2 relative" @click="openNotification">
      <span class="absolute top-0 right-0 text-xs me-2 px-2 py-0.5 rounded-full bg-red-900 text-white" v-if="countUnreadlNotificationsAsRead > 0">
        {{ countUnreadlNotificationsAsRead }}
      </span>
      <Loader class="animate-spn size-3" v-if="loading" />
      <SvgIcon name="bell" v-else />
    </Button>

    <ClientOnly>
      <Teleport to="#teleports">
        <Notifications :notifications="notifications" v-if="show" @close="closeNotification"/>
      </Teleport>
    </ClientOnly>


  </div>
</template>

<script lang="ts" setup>
import { useNotifications } from "./notification";
import SvgIcon from "./svg-icon.vue";
import Button from "./ui/button.vue";
import Tooltip from "./ui/tooltip.vue";
import { Check, X, Inbox, Loader } from "lucide-vue-next";
import Notifications from "./modals/notifications.vue";
const {
  notifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  countUnreadlNotificationsAsRead,
  loading,
  clearing,
  updating,
} = useNotifications();

const show = ref(false);
const openNotification = () => {
  show.value = true;
};
const closeNotification = () => {
  show.value = false;
}
</script>
