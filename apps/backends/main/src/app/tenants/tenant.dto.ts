import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, IsEmail, IsNumber } from 'class-validator';
import { TenantStatus } from './enums/tenant-status.enum';
import { TenantType } from './enums/tenant-type.enum';

@InputType()
export class CreateTenantDto {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  slug: string;

  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => TenantType)
  @IsEnum(TenantType)
  type: TenantType;

  @Field(() => TenantStatus)
  @IsEnum(TenantStatus)
  status: TenantStatus;

  @Field()
  @IsNumber()
  totalChallenges: number;

  @Field()
  @IsNumber()
  totalUsers: number;

  @Field()
  @IsNumber()
  totalGifts: number;

  @Field()
  @IsNumber()
  maxActiveChallenges: number;

  @Field()
  @IsNumber()
  maxUsersPerChallenge: number;

  @Field()
  @IsNumber()
  maxTags: number;
}
