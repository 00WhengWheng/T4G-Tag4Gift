import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, IsOptional, IsEnum, IsBoolean, IsDate, IsNumber } from 'class-validator';
import { UserRole, UserStatus, AuthProvider } from '@prisma/client';

@InputType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @Field(() => UserStatus)
  @IsEnum(UserStatus)
  status: UserStatus;

  @Field(() => AuthProvider)
  @IsEnum(AuthProvider)
  authProvider: AuthProvider;

  @Field()
  @IsString()
  language: string;

  @Field()
  @IsString()
  timezone: string;

  @Field()
  @IsBoolean()
  isEmailVerified: boolean;

  @Field()
  @IsBoolean()
  isPhoneVerified: boolean;

  @Field()
  @IsNumber()
  totalPoints: number;

  @Field()
  @IsNumber()
  level: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastLoginIp?: string;
}
