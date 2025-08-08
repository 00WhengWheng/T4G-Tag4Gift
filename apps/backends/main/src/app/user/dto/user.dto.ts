import { IsEmail, IsString, IsOptional, IsEnum, IsBoolean, IsDate, IsNumber, MinLength } from 'class-validator';
import { UserRole } from './enums/user-role.enum';
import { UserStatus } from './enums/user-status.enum';
import { AuthProvider } from './enums/auth-provider.enum';

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
  phoneNumber?: string;

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
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  lastLoginIp?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsOptional()
  @IsEnum(AuthProvider)
  authProvider?: AuthProvider;

  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @IsString()
  timezone?: string;

  @IsOptional()
  @IsBoolean()
  isEmailVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  isPhoneVerified?: boolean;

  @IsOptional()
  @IsNumber()
  totalPoints?: number;

  @IsOptional()
  @IsNumber()
  level?: number;

  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @MinLength(8)
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  lastLoginIp?: string;
}

export class UserResponseDto {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  role: UserRole;
  status: UserStatus;
  authProvider: AuthProvider;
  language: string;
  timezone: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  totalPoints: number;
  level: number;
  tenantId?: string;
  lastLoginIp?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(user: any) {
    this.id = user.id;
    this.email = user.email;
    this.username = user.username;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.avatar = user.avatar;
    this.phoneNumber = user.phoneNumber;
    this.dateOfBirth = user.dateOfBirth;
    this.role = user.role;
    this.status = user.status;
    this.authProvider = user.authProvider;
    this.language = user.language;
    this.timezone = user.timezone;
    this.isEmailVerified = user.isEmailVerified;
    this.isPhoneVerified = user.isPhoneVerified;
    this.totalPoints = user.totalPoints;
    this.level = user.level;
    this.tenantId = user.tenantId;
    this.lastLoginIp = user.lastLoginIp;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
