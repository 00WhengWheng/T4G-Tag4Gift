import { UserRole, UserStatus, AuthProvider } from '@prisma/client';

export class User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: Date;
  role: UserRole;
  status: UserStatus;
  authProvider: AuthProvider;
  language: string;
  timezone: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  totalPoints: number;
  level: number;
  tenantId?: string;
  createdAt: Date;
  updatedAt: Date;
  password?: string;
  lastLoginIp?: string;
  auth0Id?: string;
  // Coin-related fields from relations
  coinBalance?: {
    tagCoins: number;
    shareCoins: number;
    gameCoins: number;
    totalCoins: number;
  };
  challengePasses?: any[];
  coinTransactions?: any[];
}
