import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ShareService } from './share.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ShareToFacebookDto, ShareToInstagramDto } from './dto/share.dto';

@Controller('share')
export class ShareController {
  constructor(private readonly shareService: ShareService) {}

  @Post('facebook')
  @UseGuards(JwtAuthGuard)
  async shareToFacebook(@Body() shareDto: ShareToFacebookDto): Promise<boolean> {
    return this.shareService.shareToFacebook(
      shareDto.accessToken,
      shareDto.message,
      shareDto.link
    );
  }

  @Post('instagram')
  @UseGuards(JwtAuthGuard)
  async shareToInstagram(@Body() shareDto: ShareToInstagramDto): Promise<boolean> {
    return this.shareService.shareToInstagram(
      shareDto.accessToken,
      shareDto.imageUrl,
      shareDto.caption
    );
  }
}
