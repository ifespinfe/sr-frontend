import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { Host } from "~/types/user";
import type { EventPayload } from "~/schemas/event-schema";
import type {
  AppNotification,
  EventRequest,
  LiveEvent,
  RequestPaymentPayload,
  RequestPaymentResponse,
} from "~/types/event";
import type {
  HypeRequestPayload,
  SongRequestPayload,
} from "~/schemas/request-schema";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;
  CREATE_EVENT = "events";
  GO_LIVE = "events/go-live";
  UPDATE_EVENT_PRICE = "events/type";
  END_EVENT = "events/end";
  UPDATE_EVENT_REQUEST = "requests/status";
  EVENT_REQUESTS = "requests";
  CREATE_REQUEST = "requests";
  DELETE_EVENT = "events";
  ALL_NOTIFICATIONS = "user/notification";
  MARK_NOTIFICATION_AS_READ = "user/mark/notification-read";
  COUNT_UNREAD_NOTIFICATION = "user/count-unread/notification"

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call<O>(
    method: FetchMethods,
    route: string,
    data?: object,
    options?: FetchOptions
  ) {
    return this.$fetch<ApiResponse<O>>(route, {
      method,
      body: data,
      ...options,
    });
  }

  async createEvent(event: EventPayload) {
    return await this.call<LiveEvent>("POST", this.CREATE_EVENT, event);
  }

  async editEvent(event: EventPayload, event_id: string | number) {
    return await this.call<LiveEvent>(
      "PUT",
      `${this.CREATE_EVENT}/${event_id}`,
      event
    );
  }

  async deleteEvent(event_id: string | number) {
    return await this.call<boolean>(
      "DELETE",
      `${this.DELETE_EVENT}/${event_id}`
    );
  }

  async goLive(event_id: string | number) {
    return await this.call<LiveEvent>("PUT", `${this.GO_LIVE}/${event_id}`);
  }

  async updateEventPrice(type_id: string | number, price: number) {
    return await this.call<{
      id: number;
      name: "song" | "hype";
      price: number;
    }>("PUT", `${this.UPDATE_EVENT_PRICE}/${type_id}`, { price });
  }

  async endEvent(event_id: string | number) {
    return await this.call<LiveEvent>("PUT", `${this.END_EVENT}/${event_id}`);
  }

  async getEventRequests(event_id: string | number) {
    return await this.call<EventRequest[]>(
      "GET",
      `${this.EVENT_REQUESTS}?event_id=${event_id}`
    );
  }

  async fetchRequestDetails(request_id: string | number) {
    return await this.call<EventRequest>("GET", `/requests/${request_id}`);
  }

  async updateEventRequest(
    request_id: string | number,
    status: EventRequest["status"]
  ) {
    return await this.call<EventRequest>(
      "PUT",
      `${this.UPDATE_EVENT_REQUEST}/${request_id}`,
      { status }
    );
  }

  async createRequest(request: HypeRequestPayload | SongRequestPayload) {
    return await this.call<EventRequest>("POST", this.CREATE_REQUEST, request);
  }

  async payForRequest(
    payload: RequestPaymentPayload,
    request_id: string | number
  ) {
    return await this.call<RequestPaymentResponse>(
      "POST",
      `payment/requests/${request_id}/payment/create`,
      payload
    );
  }

  async fetchAllNotifications() {
    return await this.call<AppNotification[]>("GET", this.ALL_NOTIFICATIONS);
  }

  async markNotificationAsRead(id: string | number) {
    return await this.call("GET", `${this.MARK_NOTIFICATION_AS_READ}/${id}`);
  }

  async markAllNotificationsAsRead() {
    return await this.call("GET", this.MARK_NOTIFICATION_AS_READ);
  }

  async countUnreadNotification() {
    return await this.call("GET", this.COUNT_UNREAD_NOTIFICATION);
  }
}
