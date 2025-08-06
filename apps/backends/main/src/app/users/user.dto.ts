import { IsEmail, IsString, IsOptional, IsEnum, IsBoolean, IsDate, IsNumber } from 'class-validator';
import { UserRole, UserStatus, AuthProvider } from '@prisma/client';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  username: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsEnum(UserRole)
  role: UserRole;

  @IsEnum(UserStatus)
  status: UserStatus;

  @IsEnum(AuthProvider)
  authProvider: AuthProvider;

  @IsString()
  language: string;

  @IsString()
  timezone: string;

  @IsBoolean()
  isEmailVerified: boolean;

  @IsBoolean()
  isPhoneVerified: boolean;

  @IsNumber()
  totalPoints: number;

  @IsNumber()
  level: number;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  lastLoginIp?: string;
}
