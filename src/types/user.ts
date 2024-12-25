export type UserRole = 'brand' | 'agency' | 'kol';

export interface UserProfile {
  id: string;
  role: UserRole;
  name: string;
  bio?: string;
  logo?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
  portfolio?: {
    title: string;
    description: string;
    link: string;
  }[];
}