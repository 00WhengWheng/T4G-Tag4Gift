import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ShareService } from './share.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ShareToFacebookDto, ShareToInstagramDto } from './share.dto';

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post('facebook')
  @UseGuards(JwtAuthGuard)
  async shareToFacebook(@Body() shareDto: ShareToFacebookDto): Promise<{ id: string; dbRecord: any }> {
    // You may want to get userId and tenantId from JWT or request context
    const { accessToken, message, link, userId, tenantId } = shareDto;
    const result = await this.shareService.shareToFacebookPage(
      accessToken,
      message,
      link,
      userId,
      tenantId
    );
    return result;
  }

  @Post('instagram')
  @UseGuards(JwtAuthGuard)
  async shareToInstagram(@Body() shareDto: ShareToInstagramDto): Promise<{ id: string; dbRecord: any }> {
    // You may want to get userId and tenantId from JWT or request context
    const { accessToken, imageUrl, caption, userId, tenantId } = shareDto;
    const result = await this.shareService.shareToInstagramBusiness(
      accessToken,
      imageUrl,
      caption,
      userId,
      tenantId
    );
    return result;
  }
}
