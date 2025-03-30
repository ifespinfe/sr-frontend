import type { ApiError } from "~/types";
import type { AppNotification } from "~/types/event";

export interface GlobalNotification {
  notifications: Ref<AppNotification[]>;
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
    refresh: refreshNotifications,
  } = useAsyncData("ALL-NOTIFICATIONS", () => {
    return event.fetchAllNotifications();
  });
  // console.log(event.fetchAllNotifications())
  const notifications = computed(() => data.value?.data ?? []);
  const loading = computed(() => status.value === "pending");
  const markNotificationAsRead = async (id: string | number) => {
    try {
      Object.assign(updating.value, { [id]: true });
      await event.markNotificationAsRead(id);
      Object.assign(updating.value, { [id]: false });
      refreshNotifications();
    } catch (e) {
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

  provide(key, {
    notifications,
    loading,
    markAllNotificationsAsRead,
    markNotificationAsRead,
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
