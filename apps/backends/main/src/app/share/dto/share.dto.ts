// Stub DTO for Facebook share
export class ShareToFacebookDto {
  accessToken?: string;
  message?: string;
  link?: string;
}

// Stub DTO for Instagram share
export class ShareToInstagramDto {
  accessToken?: string;
  imageUrl?: string;
  caption?: string;
}
import { IsString, IsOptional, IsEnum, IsUrl } from 'class-validator';
import { ShareType } from '@prisma/client';

// Unified DTO for all share types
export class ShareDto {
  @IsEnum(ShareType)
  shareType: ShareType;

  @IsString()
  accessToken: string;

  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @IsUrl()
  link?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  caption?: string;
}

export class ShareToTikTokDto {
  @IsString()
  accessToken: string;

  @IsUrl()
  videoUrl: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;
}
