import type { AuthUser } from "./auth";
import type { EventRequest, EventType, LiveEvent } from "./event";

export interface Host {
  id: number;
  email: string;
  profile_picture: string;
  slug: string;
  profession: string;
  stage_name: string;
  user_name: string;
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
    role: "host" | "audience";
    type: "host" | "audience";
    slug: string;
    profession: string;
    stage_name: string;
    is_live: boolean;
    bank_account: null;
  };
  live_event?: LiveEvent;
}

export interface MakeARequestRes {
  types: EventType[];
  requests: {
    id: number;
    host: {
      id: number;
      name: string | null;
      email: string;
      type: string;
      stage_name: string;
      profession: string;
      slug: string;
      qrcode: string;
      profile_picture: string;
      bio: string;
      gender: string;
      dob: string;
      country: string;
      created_at: string;
      updated_at: string;
      active: number;
      last_login: string;
    };
    nickname: string;
    audience: {
      id: number;
      name: null | string;
      email: string;
      type: string;
      stage_name: string;
      profession: null | string;
      slug: string;
      qrcode: string;
      bio: null | string;
      gender: string;
      dob: string;
      country: string;
      created_at: string;
      updated_at: string;
      active: number;
      last_login: string;
    };
    type: string;
    status: string;
    description: null | string;
    artist: string;
    song_title: string;
    price: string;
    created_at: string;
  }[];
}

export interface Fan {
  name?: string;
  user_name?: string;
  slug?: string;
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
  subscribed?: boolean;
  followed?: boolean;
  url: string | null;
  url_name: string | null;
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
export interface Following {
  following: {
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
