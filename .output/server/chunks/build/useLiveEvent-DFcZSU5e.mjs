import { a as useNuxtApp, l as useNotifications, n as navigateTo, s as showToast } from './server.mjs';
import { ref } from 'vue';

const useLiveEvent = () => {
  const {
    $repo: { event, wallet },
    $config: {
      public: { APP_BASE_URL }
    }
  } = useNuxtApp();
  const { refreshNotifications } = useNotifications();
  const ending = ref(false);
  const update_status = ref(null);
  const updating = ref(false);
  const creating = ref(false);
  const paying = ref(false);
  const fetchEventRequests = async (event_id) => {
    return await event.getEventRequests(event_id);
  };
  const endEvent = async (event_id) => {
    var _a2;
    var _a;
    try {
      ending.value = true;
      const response = await event.endEvent(event_id);
      refreshNotifications();
      ending.value = false;
      if (response.data) {
        navigateTo(`/events/${event_id}/event-earnings`);
      }
    } catch (error) {
      const e = error;
      ending.value = false;
      showToast({
        title: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to end event",
        variant: "warning"
      });
    }
  };
  const updateEventRequest = async (request_id, status, onUpdate) => {
    var _a2, _b;
    var _a;
    try {
      update_status.value = status;
      updating.value = true;
      const response = await event.updateEventRequest(request_id, status);
      refreshNotifications();
      showToast({ title: (_a2 = response.message) != null ? _a2 : "Updated" });
      updating.value = false;
      update_status.value = null;
      response.data && (onUpdate == null ? void 0 : onUpdate());
    } catch (error) {
      const e = error;
      update_status.value = null;
      updating.value = false;
      showToast({
        title: (_b = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _b : "Failed to update event",
        variant: "warning"
      });
    }
  };
  const createEventRequest = async (request, host_slug) => {
    var _a2;
    var _a, _b, _c, _d;
    try {
      const spin_route = true;
      creating.value = true;
      const response = await event.createRequest(request);
      refreshNotifications();
      const price = Number(response.data.price);
      if (!price) {
        creating.value = false;
        return navigateTo(`/${(_b = (_a = response.data) == null ? void 0 : _a.host) == null ? void 0 : _b.slug}`);
      }
      if (spin_route) {
        creating.value = false;
        return navigateTo(
          `/${host_slug}/${request.event_id}/${response.data.id}/make-payment`
        );
      }
      const balance = (_c = await wallet.getWallet()) == null ? void 0 : _c.wallet_balance;
      let type = "gateway";
      if (balance) {
        type = balance >= price ? "wallet" : "split";
      }
      const url = new URL(
        `${APP_BASE_URL}/${host_slug}/${request.event_id}/${response.data.id}/request-receipt`
      );
      const PAYSTACK_PAYMENT = type === "wallet" ? {
        redirect_url: url.href,
        type
      } : {
        redirect_url: url.href,
        type,
        gateway: "paystack"
      };
      const payment_response = await event.payForRequest(
        PAYSTACK_PAYMENT,
        response.data.id
      );
      creating.value = false;
      if (payment_response.data.redirect_url) {
        await navigateTo(payment_response.data.redirect_url, {
          external: true
        });
      }
    } catch (error) {
      const e = error;
      creating.value = false;
      showToast({
        title: (_a2 = (_d = e == null ? undefined : e.data) == null ? undefined : _d.message) != null ? _a2 : "Failed to create request",
        variant: "warning"
      });
    }
  };
  const payForRequest = async (request, host_slug, balance) => {
    var _a2;
    var _a;
    try {
      let type = "gateway";
      const price = Number(request.price);
      if (balance) {
        type = balance >= price ? "wallet" : "split";
      }
      const url = new URL(
        `${APP_BASE_URL}/${host_slug}/${request.event_id}/${request.id}/request-receipt`
      );
      const PAYSTACK_PAYMENT = type === "wallet" ? {
        redirect_url: url.href,
        type
      } : {
        redirect_url: url.href,
        type,
        gateway: "paystack"
      };
      paying.value = true;
      const payment_response = await event.payForRequest(
        PAYSTACK_PAYMENT,
        request.id
      );
      paying.value = false;
      if (payment_response.data.redirect_url) {
        return await navigateTo(payment_response.data.redirect_url, {
          external: true
        });
      }
      refreshNotifications();
      return navigateTo(
        `/${host_slug}/${request.event_id}/${request.id}/request-receipt`
      );
    } catch (error) {
      const e = error;
      paying.value = false;
      showToast({
        title: (_a2 = (_a = e == null ? undefined : e.data) == null ? undefined : _a.message) != null ? _a2 : "Failed to pay for request",
        variant: "warning"
      });
    }
  };
  return {
    fetchEventRequests,
    endEvent,
    ending,
    updateEventRequest,
    update_status,
    updating,
    createEventRequest,
    creating,
    payForRequest,
    paying
  };
};

export { useLiveEvent as u };
//# sourceMappingURL=useLiveEvent-DFcZSU5e.mjs.map
