import { TenantStatus } from './enums/tenant-status.enum';
import { TenantType } from './enums/tenant-type.enum';

export class Tenant {
  id: string;
  name: string;
  slug: string;
  email: string;
  description?: string;
  type: TenantType;
  status: TenantStatus;
  totalChallenges: number;
  totalUsers: number;
  totalGifts: number;
  maxActiveChallenges: number;
  maxUsersPerChallenge: number;
  maxTags: number;
  createdAt: Date;
  updatedAt: Date;
}
