// Social share payload types for tRPC mutations

export interface FacebookPayload {
  accessToken: string;
  message: string;
  link?: string;
}

export interface InstagramPayload {
  accessToken: string;
  imageUrl: string;
  caption?: string;
}

export interface TikTokPayload {
  accessToken: string;
  videoUrl: string;
  title: string;
  description?: string;
}

export type ShareType = 'FACEBOOK' | 'INSTAGRAM' | 'TIKTOK';
