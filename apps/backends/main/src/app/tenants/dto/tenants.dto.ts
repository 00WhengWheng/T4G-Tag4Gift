import { IsString, IsOptional, IsEnum, IsEmail, IsNumber } from 'class-validator';
import { VenueType } from '../enums/tenant-type.enum';

export class CreateTenantDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  vatNumber?: string;

  @IsOptional()
  @IsString()
  legalName?: string;

  @IsOptional()
  @IsString()
  googleMap?: string;

  @IsOptional()
  @IsString()
  facebook?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  tiktok?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsEnum(VenueType)
  venueType: VenueType;
}

export class UpdateTenantDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsString()
  vatNumber?: string;

  @IsOptional()
  @IsString()
  legalName?: string;

  @IsOptional()
  @IsString()
  googleMap?: string;

  @IsOptional()
  @IsString()
  facebook?: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsOptional()
  @IsString()
  tiktok?: string;

  @IsOptional()
  @IsString()
  website?: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsEnum(VenueType)
  venueType?: VenueType;
}

export class TenantResponseDto {
  id: string;
  name: string;
  email: string;
  description?: string;
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
  venueType: VenueType;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(tenant: any) {
    this.id = tenant.id;
    this.name = tenant.name;
    this.email = tenant.email;
    this.description = tenant.description;
    this.phoneNumber = tenant.phoneNumber;
    this.address = tenant.address;
    this.city = tenant.city;
    this.country = tenant.country;
    this.vatNumber = tenant.vatNumber;
    this.legalName = tenant.legalName;
    this.googleMap = tenant.googleMap;
    this.facebook = tenant.facebook;
    this.instagram = tenant.instagram;
    this.tiktok = tenant.tiktok;
    this.website = tenant.website;
    this.logo = tenant.logo;
    this.venueType = tenant.venueType;
    this.isActive = tenant.isActive;
    this.createdAt = tenant.createdAt;
    this.updatedAt = tenant.updatedAt;
  }
}
