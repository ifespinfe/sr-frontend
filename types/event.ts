export interface EventRequest {
  id: number | string;
  user_id: number;
  event_id: number;
  host: {
    id: number;
    name: string;
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
  };
  nickname: string;
  audience: {
    id: number;
    name: string;
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
  };
  type: "song" | "hype";
  status:
    | "new"
    | "payment-pending"
    | "now-playing"
    | "declined"
    | "completed"
    | "ignored";
  description: string;
  artist: string | null;
  song_title: string | null;
  price: string | number;
  created_at: string;
}

export interface ActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "new" | "now-playing";
}

export interface InActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "payment-pending" | "declined" | "completed" | "ignored";
}

export interface EventType {
  id: number;
  name: "song" | "hype";
  price: number;
}

export type EventStatus = "new" | "live" | "ended";

export interface LiveEvent {
  id: number;
  title: string;
  address: string;
  country: string;
  state: string;
  status: EventStatus;
  start_date: string;
  end_date: null;
  earnings: number;
  hype_earnings: number;
  song_earnings: number;
  types: EventType[];
  requests: EventRequest[];
}

export type OrderEvent = Pick<LiveEvent, "address" | "title" | "start_date">;
export interface EventHistory {
  // previous_event_count: number;
  // song_requests_count: number;
  // hype_requests_count: number;
  event_details: {
    id: number;
    title: string;
    address: string;
    country: string;
    state: string;
    status: EventStatus;
    start_date: string;
    end_date: string;
    earnings: number;
    requests_count: number;
  }[];
  meta_data: {
    total: number;
    count: number;
    per_page: number;
    current_page: number;
    total_pages: number;
  };
  link: {
    prev: string | null;
    next: string | null;
    first: string | null;
    last: string | null;
  };
}

export interface HostAudience {
  audience_name: string;
  hype_earnings: number;
  song_earnings: number;
  total_earnings: number;
}

export interface EventFormDetails {
  title?: string;
  address?: string;
  country?: string;
  state?: string;
  type?: "song" | "hype" | "both";
  song_price?: number;
  hype_price?: number;
}

export interface PriceHistory {
  old_price: string | number;
  new_price: string | number;
  created_at: string;
  type: "hype" | "song";
}

export interface EventSummary {
  event: {
    id: number | string;
    title: string;
    address: string;
    country: string;
    state: string;
    status: EventStatus;
    start_date: string;
    end_date: string | null;
    earnings: number;
    types: {
      hype: {
        count: number;
        total_price: number | string;
      };
      song: {
        count: number;
        total_price: number | string;
      };
    };
  };
  total_earnings: number;
  top_spenders: {
    total: string | number;
    user_id: number | string;
    email: string;
    name: string | null;
    stage_name: string | null;
  }[];

  price_histories: PriceHistory[];
}

export interface RequestPaymentPayload {
  redirect_url: string;
  type: "wallet" | "gateway" | "split";
  gateway?: "paystack";
}

export interface RequestPaymentResponse {
  status: string;
  message: string;
  redirect_url: string;
}

export interface EventSpender {
  total: string | number;
  user_id: string | number;
  email: string;
  name?: string;
  user_name?: string;
  nickname?: string;
  stage_name?: string;
  position?: number;
  active?: boolean;
}

export interface EventTransactionDetails {
  earning: number;
  title: string;
  reference: string;
  amount_earned: number;
  "amount earned": number;
  event_earnings: number;
  commission_percent: string;
  commission: number;
  date: string;
  status: "success";
  history: EventRequest[];
}

export interface EventPayoutDetails {
  amount: string | number;
  date: string;
  id: number;
  payment_gateway: "paystack" | "wallet";
  reference: string;
  status: "success";
  time: string;
}

export interface AppNotification {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: {
    message: string;
  };
  read_at: null | string;
  created_at: string;
  updated_at: string;
}

export interface PusherEndEvent {
  host_id: number | string;
  host_name: string | null;
  host_title: string;
  spr_event_address: string;
  spr_event_country: string;
  spr_event_end_date: string;
  spr_event_id: number | number;
  spr_event_name: string;
  spr_event_start_date: string;
  spr_event_state: string;
  spr_event_status: string;
}

export interface PusherRequestUpdate {
  request: {
    id: number | string;
    status: EventRequest["status"];
    type: "hype" | "song";
    description: string;
    nickname: string;
    artist: string | null;
    song_title: string | null;
    price: string | number;
  };
  event: {
    id: number | string;
    name: string;
    address: string;
    country: string;
    state: string;
    status: EventStatus;
    start_date: string | null;
    end_date: string | null;
  };
  audience: {
    id: number | string;
    name: string | null;
    stage_name: string | null;
  };
  host: {
    id: number | string;
    name: string | null;
    title: string;
  };
}
