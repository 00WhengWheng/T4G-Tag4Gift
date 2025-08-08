import { IsString, IsOptional, IsEnum, IsEmail, IsNumber } from 'class-validator';
import { TenantStatus } from '../enums/tenant-status.enum';
import { TenantType } from '../enums/tenant-type.enum';

export class CreateTenantDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(TenantType)
  type: TenantType;

  @IsEnum(TenantStatus)
  status: TenantStatus;

  @IsNumber()
  totalChallenges: number;

  @IsNumber()
  totalUsers: number;

  @IsNumber()
  totalGifts: number;

  @IsNumber()
  maxActiveChallenges: number;

  @IsNumber()
  maxUsersPerChallenge: number;

  @IsNumber()
  maxTags: number;
}

export class UpdateTenantDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TenantType)
  type?: TenantType;

  @IsOptional()
  @IsEnum(TenantStatus)
  status?: TenantStatus;

  @IsOptional()
  @IsNumber()
  totalChallenges?: number;

  @IsOptional()
  @IsNumber()
  totalUsers?: number;

  @IsOptional()
  @IsNumber()
  totalGifts?: number;

  @IsOptional()
  @IsNumber()
  maxActiveChallenges?: number;

  @IsOptional()
  @IsNumber()
  maxUsersPerChallenge?: number;

  @IsOptional()
  @IsNumber()
  maxTags?: number;
}

export class TenantResponseDto {
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
  createdAt?: Date;
  updatedAt?: Date;

  constructor(tenant: any) {
    this.id = tenant.id;
    this.name = tenant.name;
    this.slug = tenant.slug;
    this.email = tenant.email;
    this.description = tenant.description;
    this.type = tenant.type;
    this.status = tenant.status;
    this.totalChallenges = tenant.totalChallenges;
    this.totalUsers = tenant.totalUsers;
    this.totalGifts = tenant.totalGifts;
    this.maxActiveChallenges = tenant.maxActiveChallenges;
    this.maxUsersPerChallenge = tenant.maxUsersPerChallenge;
    this.maxTags = tenant.maxTags;
    this.createdAt = tenant.createdAt;
    this.updatedAt = tenant.updatedAt;
  }
}
