import { IsString, IsOptional } from 'class-validator';

export class ShareToFacebookDto {
  @IsString()
  accessToken: string;

  @IsString()
  message: string;

  @IsString()
  @IsOptional()
  link?: string;
}

export class ShareToInstagramDto {
  @IsString()
  accessToken: string;

  @IsString()
  imageUrl: string;

  @IsString()
  @IsOptional()
  caption?: string;
}
