import { registerEnumType } from '@nestjs/graphql';

export enum TenantStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
}

registerEnumType(TenantStatus, {
  name: 'TenantStatus',
  description: 'The status of the tenant',
});
