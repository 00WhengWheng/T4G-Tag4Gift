import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { ShareService } from './share.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ShareToFacebookDto, ShareToInstagramDto } from './dto/share.dto';
import { Request } from 'express';

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post('facebook')
  @UseGuards(JwtAuthGuard)
  async shareToFacebook(@Body() shareDto: ShareToFacebookDto, @Req() req: Request): Promise<{ id: string; dbRecord: any }> {
    // Extract userId and tenantId from JWT payload
    const userId = req.user?.sub;
    const tenantId = req.user?.tenantId;
    const { accessToken, message, link } = shareDto;
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
  async shareToInstagram(@Body() shareDto: ShareToInstagramDto, @Req() req: Request): Promise<{ id: string; dbRecord: any }> {
    // Extract userId and tenantId from JWT payload
    const userId = req.user?.sub;
    const tenantId = req.user?.tenantId;
    const { accessToken, imageUrl, caption } = shareDto;
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
