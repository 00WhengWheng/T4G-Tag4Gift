import { UserRole, UserStatus, AuthProvider } from '@prisma/client';

/**
 * User entity: represents a user in the backend, used for type safety and response shaping.
 */
export class User {
  /** Unique user ID */
  id!: string;
  /** User email */
  email!: string;
  /** Username */
  username!: string;
  /** First name */
  firstName!: string;
  /** Last name */
  lastName!: string;
  /** Phone number (optional) */
  phone?: string;
  /** Avatar URL (optional) */
  avatar?: string;
  /** Date of birth (optional) */
  dateOfBirth?: Date;
  /** User role */
  role!: UserRole;
  /** User status */
  status!: UserStatus;
  /** Auth provider */
  authProvider!: AuthProvider;
  /** Language */
  language!: string;
  /** Timezone */
  timezone!: string;
  /** Email verified */
  isEmailVerified!: boolean;
  /** Phone verified */
  isPhoneVerified!: boolean;
  /** Total points */
  totalPoints!: number;
  /** User level */
  level!: number;
  /** Tenant ID (optional) */
  tenantId?: string;
  /** Created at */
  createdAt!: Date;
  /** Updated at */
  updatedAt!: Date;
  /** Last login IP (optional) */
  lastLoginIp?: string;

  /** Password (never exposed in API responses) */
  password?: string;
}
