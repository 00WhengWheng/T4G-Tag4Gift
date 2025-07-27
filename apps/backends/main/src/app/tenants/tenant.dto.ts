import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsEnum, IsEmail, IsNumber } from 'class-validator';
import { TenantType, TenantStatus } from '@prisma/client';

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
