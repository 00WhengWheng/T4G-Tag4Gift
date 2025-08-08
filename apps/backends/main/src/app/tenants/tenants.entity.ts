import { VenueType } from './enums/tenant-type.enum';

/**
 * Tenant entity: matches schema2.prisma Tenant model
 */
export class Tenant {
  id!: string;
  name!: string;
  description?: string;
  email!: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  country?: string;
  vatNumber?: string;
  legalName?: string;
  googleMap?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  website?: string;
  logo?: string;
  venueType!: VenueType;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
