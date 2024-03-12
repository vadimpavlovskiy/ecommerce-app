import { User } from "@supabase/auth-helpers-nextjs";

export interface UserDetail {
  id: number;
  fullName: string;
  avatar_url: string;
  billing_adress: string;
}

export type UserContentType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetail | null;
  isLoading: boolean;
};
