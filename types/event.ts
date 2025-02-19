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
  previous_event_count: number;
  song_requests_count: number;
  hype_requests_count: number;
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
}

export interface EventTransactionDetails {
  earning: number;
  title: string;
  reference: string;
  amount_earned: number;
  "amount earned": number;
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
