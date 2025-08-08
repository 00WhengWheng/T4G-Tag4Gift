import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ShareService } from './share.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ShareToFacebookDto, ShareToInstagramDto, ShareToTikTokDto } from './dto/share.dto';
import { Request } from 'express';

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post('facebook')
  @UseGuards(JwtAuthGuard)
  async shareToFacebook(@Body() shareDto: ShareToFacebookDto, @Req() req: Request): Promise<{ id: string; dbRecord: any }> {
    const userId = req.user?.sub;
    const tenantId = req.user?.tenantId;
    const { accessToken, message, link } = shareDto;
    return await this.shareService.shareToFacebookPage(accessToken, message, link, userId, tenantId);
  }

  @Post('instagram')
  @UseGuards(JwtAuthGuard)
  async shareToInstagram(@Body() shareDto: ShareToInstagramDto, @Req() req: Request): Promise<{ id: string; dbRecord: any }> {
    const userId = req.user?.sub;
    const tenantId = req.user?.tenantId;
    const { accessToken, imageUrl, caption } = shareDto;
    return await this.shareService.shareToInstagramBusiness(accessToken, imageUrl, caption, userId, tenantId);
  }

  @Post('tiktok')
  @UseGuards(JwtAuthGuard)
  async shareToTikTok(@Body() shareDto: ShareToTikTokDto, @Req() req: Request): Promise<{ publishId: string; dbRecord: any }> {
    const userId = req.user?.sub;
    const tenantId = req.user?.tenantId;
    const { accessToken, videoUrl, title, description } = shareDto;
    return await this.shareService.shareToTikTok(accessToken, videoUrl, title, description, userId, tenantId);
  }
}
