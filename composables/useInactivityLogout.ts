// composables/useInactivityLogout.ts
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router"; // Adjust to your auth store path

export default function useInactivityLogout(timeoutMinutes = 30) {
  const lastActivity = ref(Date.now());
  const timer = ref<number | null>(null);
  const router = useRouter();
  const timeoutMs = timeoutMinutes * 60 * 1000;
  const { logOut } = useAuth();

  const updateLastActivity = () => {
    lastActivity.value = Date.now();
  };

  const checkInactivity = () => {
    const now = Date.now();
    const inactiveTime = now - lastActivity.value;

    if (inactiveTime >= timeoutMs) {
      logOut();
      router.push("/login");
      showToast({
        title: "Please log in again",
        variant: "normal",
      });
    }
  };

  const startInactivityTimer = () => {
    // check every minute
    timer.value = setInterval(checkInactivity, 60000);
  };

  const stopInactivityTimer = () => {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
  };

  onMounted(() => {
    const activityEvents = [
      "keypress",
      "scroll",
      "touchstart",
      "click",
      "keydown",
    ];

    activityEvents.forEach((event) => {
      window.addEventListener(event, updateLastActivity);
    });

    updateLastActivity();
    startInactivityTimer();
  });

  onUnmounted(() => {
    // clean up event listeners
    const activityEvents = [
      "keypress",
      "scroll",
      "touchstart",
      "click",
      "keydown",
    ];

    activityEvents.forEach((event) => {
      window.removeEventListener(event, updateLastActivity);
    });

    // clear the interval
    stopInactivityTimer();
  });

  return {
    resetInactivityTimer: updateLastActivity,
    startInactivityTimer,
    stopInactivityTimer,
  };
}
