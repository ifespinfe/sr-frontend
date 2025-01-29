import type { ApiResponse } from "~/types";
import type { $Fetch, NitroFetchOptions } from "nitropack";
import type { Host } from "~/types/user";
type FetchOptions = NitroFetchOptions<"json">;
type FetchMethods = FetchOptions["method"];

export default class Auth {
  private $fetch: $Fetch;
  SEARCH_HOST = "user/search-host";
  FOLLOW_USER = "follow";
  UNFOLLOW_USER = "unfollow";
  FOLLOWING_LIST = "followers";
  SUBSCRIBE = "subscribe";
  UNSUBSCRIBE = "unsubscribe";

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

  async searchHost(name: string) {
    return this.call<{ hosts: Host[] }>(
      "GET",
      `${this.SEARCH_HOST}?name=${name}&per_page=100&page=1`
    );
  }

  async followUser(payload: { parent_id: string | number }) {
    return this.call("POST", this.FOLLOW_USER, payload);
  }

  async unFollowUser(payload: { parent_id: string | number }) {
    return this.call("POST", this.UNFOLLOW_USER, payload);
  }

  async fetchFollowingList() {
    return this.call("GET", this.FOLLOWING_LIST);
  }

  async subscribeUser(host_id: string | number) {
    return this.call("POST", this.SUBSCRIBE, { host_id });
  }

  async unSubscribeUser(host_id: string | number) {
    return this.call("POST", this.UNSUBSCRIBE, { host_id });
  }
}
