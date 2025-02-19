import type { InjectionKey } from "vue";
import { useNotifications } from "~/components/notification";
import { eventRequests } from "~/constants/mocks";
import type {
  HypeRequestPayload,
  SongRequestPayload,
} from "~/schemas/request-schema";
import type { ApiError } from "~/types";
import type { EventRequest, RequestPaymentPayload } from "~/types/event";

export const useLiveEvent = () => {
  const {
    $repo: { event, wallet },
    $config: {
      public: { APP_BASE_URL },
    },
  } = useNuxtApp();
  const { refreshNotifications } = useNotifications();
  const ending = ref(false);
  const update_status = ref<EventRequest["status"] | null>(null);
  const updating = ref(false);
  const creating = ref(false);
  const paying = ref(false);
  const fetchEventRequests = async (event_id: number | string) => {
    return await event.getEventRequests(event_id);
  };

  const endEvent = async (event_id: number | string) => {
    try {
      ending.value = true;
      const response = await event.endEvent(event_id);
      refreshNotifications();
      ending.value = false;
      if (response.data) {
        navigateTo(`/events/${event_id}/event-earnings`);
      }
    } catch (error) {
      const e = error as ApiError;
      ending.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to end event",
        variant: "warning",
      });
    }
  };

  const updateEventRequest = async (
    request_id: number | string,
    status: EventRequest["status"],
    onUpdate?: () => void,
    optimisticUpdate?: () => void
  ) => {
    try {
      update_status.value = status;
      updating.value = true;
      optimisticUpdate?.();
      const response = await event.updateEventRequest(request_id, status);
      refreshNotifications();
      showToast({ title: response.message ?? "Updated" });
      updating.value = false;
      update_status.value = null;
      // response.data && onUpdate?.(); removed since we have optimistic update now
    } catch (error) {
      const e = error as ApiError;
      update_status.value = null;
      updating.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to update event",
        variant: "warning",
      });
    }
  };

  const createEventRequest = async (
    request: SongRequestPayload | HypeRequestPayload,
    host_slug: string
  ) => {
    try {
      const spin_route = true;
      creating.value = true;
      const response = await event.createRequest(request);
      refreshNotifications();
      const price = Number(response?.data?.price);

      if (!price) {
        creating.value = false;
        return navigateTo(`/${response.data?.host?.slug}`);
      }

      if (spin_route) {
        creating.value = false;
        return navigateTo(
          `/${host_slug}/${request.event_id}/${response?.data?.id}/make-payment`
        );
      }
      const balance = (await wallet.getWallet())?.wallet_balance;
      let type: "wallet" | "split" | "gateway" = "gateway";

      if (balance) {
        type = balance >= price ? "wallet" : "split";
      }
      const url = new URL(
        `${APP_BASE_URL}/${host_slug}/${request.event_id}/${response?.data?.id}/request-receipt`
      );
      const PAYSTACK_PAYMENT: RequestPaymentPayload =
        type === "wallet"
          ? {
              redirect_url: url.href,
              type,
            }
          : {
              redirect_url: url.href,
              type,
              gateway: "paystack",
            };
      if (!response?.data?.id) throw new Error("Failed");
      const payment_response = await event.payForRequest(
        PAYSTACK_PAYMENT,
        response?.data?.id
      );
      creating.value = false;
      if (payment_response?.data?.redirect_url) {
        await navigateTo(payment_response.data.redirect_url, {
          external: true,
        });
      }
    } catch (error) {
      const e = error as ApiError;
      creating.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to create request",
        variant: "warning",
      });
    }
  };

  const payForRequest = async (
    request: EventRequest,
    host_slug: string,
    balance: number
  ) => {
    try {
      let type: "wallet" | "split" | "gateway" = "gateway";
      const price = Number(request.price);
      if (balance) {
        type = balance >= price ? "wallet" : "split";
      }
      const url = new URL(
        `${APP_BASE_URL}/${host_slug}/${request.event_id}/${request.id}/request-receipt`
      );
      const PAYSTACK_PAYMENT: RequestPaymentPayload =
        type === "wallet"
          ? {
              redirect_url: url.href,
              type,
            }
          : {
              redirect_url: url.href,
              type,
              gateway: "paystack",
            };
      paying.value = true;
      const payment_response = await event.payForRequest(
        PAYSTACK_PAYMENT,
        request.id
      );
      paying.value = false;
      if (payment_response?.data?.redirect_url) {
        return await navigateTo(payment_response.data.redirect_url, {
          external: true,
        });
      }
      refreshNotifications();
      return navigateTo(
        `/${host_slug}/${request.event_id}/${request.id}/request-receipt`
      );
    } catch (error) {
      const e = error as ApiError;
      paying.value = false;
      showToast({
        title: e?.data?.message ?? "Failed to pay for request",
        variant: "warning",
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
    paying,
  };
};

export const eventRequestKey = Symbol("event-request-key") as InjectionKey<{
  requests: EventRequest[];
  optimisticallyUpdateEventRequest: (
    request_id: string | number,
    status: EventRequest["status"]
  ) => void;
}>;

export const useEventRequests = () => {
  const data = inject(eventRequestKey);
  if (!data) throw new Error("Provide event requests to use it");
  return data;
};
