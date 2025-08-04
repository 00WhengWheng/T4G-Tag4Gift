// AppRouter type placeholder - will be generated from tRPC router
// TODO: Generate this automatically from the backend tRPC router
export type AppRouter = any; // Temporary placeholder for tRPC router type

// User profile interface matching Prisma schema
export interface UserProfile {
  id: string;
  auth0_id: string;
  email: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  date_of_birth?: Date;
  profile_picture_url?: string;
  scan_coins: number;
  share_coins: number;
  game_coins: number;
  created_at: Date;
  updated_at: Date;
}

// Achievement data interface
export interface UserAchievements {
  challengeWins: number;
  tournamentWins: number;
  venuesTagged: number;
}

// Common types used across the platform
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: Date;
  role: string;
  status: string;
  authProvider: string;
  totalPoints: number;
  level: number;
}

export interface GameTemplate {
  id: string;
  name: string;
  description?: string;
  type: 'QUIZ' | 'PUZZLE' | 'MUSIC' | 'REACTION';
  category?: string;
  difficulty?: string;
  structure: string;
  isActive: boolean;
  gdevelopProjectUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Challenge {
  id: string;
  name: string;
  description?: string;
  type: 'GAME_BASED' | 'INDIVIDUAL' | 'TEAM' | 'GLOBAL';
  status: 'SCHEDULED' | 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
  startDate: Date;
  endDate: Date;
  winnerCount: number;
  totalParticipants: number;
}

export interface CoinBalances {
  scanCoins: number;
  shareCoins: number;
  gameCoins: number;
}
