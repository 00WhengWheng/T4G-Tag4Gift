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
