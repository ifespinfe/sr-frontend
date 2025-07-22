import type { ApiResponse } from ".";

export interface BankDetails {
  bank_name: string;
  account_name: string;
  account_number: string;
  code: string;
  country: string;
}
export interface AuthUser {
  id: number | string;
  email: string;
  profile_picture: string;
  bio: string;
  dob: string;
  gender: string;
  country: string;
  email_verified: boolean;
  role: "host" | "audience";
  slug?: string;
  profession?: string;
  stage_name?: string;
  user_name?: string;
  name?: string;
  is_live?: false;
  balance: number;
  bank_account?: BankDetails | null;
  followers?: number;
  following?: number;
  total_requests?: number;
  stats?: {
    user_name: string;
    events: number;
    followers: number;
    following: number;
    fulfilled: number;
    requests: number;
    total_requests: number;
  };
}

export interface HostProfileUpdate {
  user: {
    name: string;
    bio: string;
    dob: string | null;
    gender: string | null;
    country: string;
    stage_name: string;
    user_name: string;
    profession: string | null;
  };
  bank_account: BankDetails;
}

export interface AudienceProfileUpdate {
  user: {
    name?: string;
    dob: string | null;
    gender: string;
    country: string;
    user_name: string;
  };
}

export const PROFESSIONAL_TYPES = [
  "DJ",
  "MC",
  "Artist",
  "Hype Man",
  "Radio Host",
  "Business",
  "Other",
] as const;

export type ProfessionTypes = (typeof PROFESSIONAL_TYPES)[number];

export interface CreateUser {
  email: string;
  password: string;
  password_confirmation: string;
}
export interface CreateHost extends CreateUser {
  stage_name: string;
  profession: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
  token: string;
  role: string;
}

export interface SignUpResponse {
  id: number;
  name: string;
  email: string;
  stagename: string;
}

export interface ResetPasswordForm {
  password: string;
  password_confirmation: string;
  token: string;
}

export interface ChangePasswordForm {
  old_password: string;
  password: string;
  password_confirmation: string;
}
