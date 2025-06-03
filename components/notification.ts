import type { ApiError } from "~/types";
import type { AppNotification } from "~/types/event";

export interface GlobalNotification {
  notifications: Ref<AppNotification[]>;
  countUnreadlNotificationsAsRead: Ref;
  markNotificationAsRead: (id: number | string) => void;
  markAllNotificationsAsRead: () => void;
  refreshNotifications: () => void;
  loading: Ref<boolean>;
  clearing: Ref<boolean>;
  updating: Ref<Record<string, boolean>>;
}

export const key: InjectionKey<GlobalNotification> = Symbol();

export const provideNotification = () => {
  const {
    $repo: { event },
  } = useNuxtApp();
  const clearing = ref(false);
  const updating = ref({});

  const {
    data,
    status,
    error,
    refresh: refreshNotifications,
  } = useAsyncData("ALL-NOTIFICATIONS", () => {
    return event.fetchAllNotifications();
  });

  // console.log("notifss i2322s", data.value);

  const notifications = computed(() => data.value?.data ?? []);
  // console.log("ppppp2", notifications.value);
  const loading = computed(() => status.value === "pending");
  const markNotificationAsRead = async (id: string | number) => {
    try {
      Object.assign(updating.value, { [id]: true });
      await event.markNotificationAsRead(id);
      Object.assign(updating.value, { [id]: false });
      refreshNotifications();
    } catch (e) {
      console.log(e);
      const error = e as ApiError;
      Object.assign(updating.value, { [id]: false });
      showToast({
        title: error.data?.message ?? "Failed to mark as read",
        variant: "warning",
      });
    }
  };

  const markAllNotificationsAsRead = async () => {
    try {
      clearing.value = true;
      await event.markAllNotificationsAsRead();
      clearing.value = false;
      refreshNotifications();
    } catch (e) {
      clearing.value = false;
      const error = e as ApiError;
      showToast({
        title: error.data?.message ?? "Failed to mark all as read",
        variant: "warning",
      });
    }
  };

  const {
    data: countUnread,
    status: countUnreadStatus,
    error: countUnreadError,
  } = useAsyncData("COUNT-UNREAD-NOTIFICATIONS", () => {
    return event.markAllNotificationsAsRead();
  });
  const countUnreadlNotificationsAsRead = computed(
    () => countUnread.value?.data ?? 0
  );

  provide(key, {
    notifications,
    loading,
    markAllNotificationsAsRead,
    markNotificationAsRead,
    countUnreadlNotificationsAsRead,
    refreshNotifications,
    clearing,
    updating,
  });
};

export const useNotifications = () => {
  const global_notifications = inject(key);
  if (!global_notifications) throw new Error("Provide notifications to use it");
  return global_notifications;
};
