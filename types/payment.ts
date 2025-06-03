import type { LinkMetaData, MetaData } from "./pagination";

export interface PaymentVerificationResponse {
  id: string | number;
  user_id: string | number;
  parent_id: string | number;
  parent_type: string;
  payment_gateway: "paystack";
  reference: string;
  amount: string;
  status: "success" | "failed";
  response_code: number | null;
  response_description: string;
  full_response: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface Bank {
  id: number | string;
  name: string;
  code: string;
}

export interface BankVerificationPayload {
  code: string;
  account_number: string;
  bank_name: string;
  country: string;
}

export interface BankVerificationResponse {
  account_name: string;
  account_number: string;
  bank_id: string;
}

export interface Order {
  amount: string | number;
  date: string;
  dj: string;
  id: number;
  parent_id: number;
  parent_type: string;
  payment_gateway: "paystack" | "wallet" | string;
  reference: string;
  response_code: string | null;
  response_description: string;
  status: string;
  time: string;
  type: "hype" | "song";
  title: string;
  start_date: string;
  address: string;
}

export interface WalletHistory {
  amount: string;
  created_at: string;
  description: string;
  reference: string;
  type: "credit" | "debit";
  event_price: string;
}

export interface Wallet {
  wallet_balance: number;
  wallet_earnings: number;
  wallet_expenses: number;
  weekly_earnings: number;
  current_week_earnings: number;
  current_week_commission: number;
  total_earnings: number;
  song_earnings: number;
  hype_earnings: number;
  account: string;
  current_page: number;
  transactions: WalletHistory[];
  meta_data: MetaData;
  link: LinkMetaData;
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}
