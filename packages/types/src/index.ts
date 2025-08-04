// Re-export AppRouter type from main backend for frontend consumption
export type { AppRouter } from '../../apps/backends/main/src/app/trpc/app.router';

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
