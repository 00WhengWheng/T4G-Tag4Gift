export interface CreateTenantDto {
  name: string;
  email: string;
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
  venueType: string;
}
