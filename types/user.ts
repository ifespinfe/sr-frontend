import type { AuthUser } from "./auth";
import type { EventRequest, LiveEvent } from "./event";

export interface Host {
  id: number;
  email: string;
  profile_picture: string;
  slug: string;
  profession: string;
  stage_name: string;
  is_live: boolean;
  bio: string;
  dob: string;
  gender: string;
  country: string;
  email_verified: boolean;
  role: "host";
  stats?: {
    events: number;
    followers: number;
    fulfilled: number;
    requests: number;
  };
}

export interface HostProfile {
  total_events: number;
  total_requests: number;
  total_fulfilled_requests: number;
  total_followers: {
    parent: AuthUser;
    user: AuthUser;
    user_id: string | number;
    parent_id: string | number;
    id: string | number;
  }[];
  user: {
    id: number;
    email: string;
    name: string;
    user_name: string;
    profile_picture: string;
    bio: string;
    dob: string;
    gender: string;
    country: string;
    email_verified: boolean;
    role: "host";
    slug: string;
    profession: string;
    stage_name: string;
    is_live: boolean;
    bank_account: null;
  };
  live_event?: LiveEvent;
}

export interface Fan {
  name?: string;
  user_name?: string;
  id: number | string;
  profile_picture?: string | null;
  bio?: string | null;
  followers?: number;
  following?: number;
  profession?: string;
  role: "audience" | "host";
  total_events?: number;
  requests?: number;
  fulfilled?: number;
}
export interface Follower {
  follower: {
    data: Fan[];
    links: {
      first: string;
      last: string;
      next: string | null;
      prev: string | null;
    };
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      per_page: number;
      to: number;
      total: number;
    };
  };
}
