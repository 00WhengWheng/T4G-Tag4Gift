import { registerEnumType } from '@nestjs/graphql';

export enum TenantType {
  VENUE = 'VENUE',
  ORGANIZER = 'ORGANIZER',
  PARTNER = 'PARTNER',
}

registerEnumType(TenantType, {
  name: 'TenantType',
  description: 'The type of tenant',
});
