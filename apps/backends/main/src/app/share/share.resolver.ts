import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { ShareService } from './share.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver()
export class ShareResolver {
  constructor(private readonly shareService: ShareService) {}

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async shareToFacebook(
    @Args('accessToken') accessToken: string,
    @Args('message') message: string,
    @Args('link', { nullable: true }) link?: string,
  ): Promise<boolean> {
    return this.shareService.shareToFacebook(accessToken, message, link);
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async shareToInstagram(
    @Args('accessToken') accessToken: string,
    @Args('imageUrl') imageUrl: string,
    @Args('caption', { nullable: true }) caption?: string,
  ): Promise<boolean> {
    return this.shareService.shareToInstagram(accessToken, imageUrl, caption);
  }
}
