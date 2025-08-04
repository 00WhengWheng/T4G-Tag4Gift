import { IsString, IsOptional, IsEnum, IsEmail, IsNumber } from 'class-validator';
import { TenantStatus } from './enums/tenant-status.enum';
import { TenantType } from './enums/tenant-type.enum';

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
