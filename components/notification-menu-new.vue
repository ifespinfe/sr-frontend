<template>
  <div>
    <Button :variant="'ghost'" class="!rounded-full border !p-2" @click="openNotification">
      <Loader class="animate-spn size-3" v-if="loading" />
      <SvgIcon name="bell" v-else />
    </Button>

    <ClientOnly>
      <Teleport to="#teleports">
        <Notifications v-if="show" @close="closeNotification"/>
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
