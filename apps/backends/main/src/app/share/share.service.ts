import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { PrismaService } from '@t4g/database';

@Injectable()
export class ShareService {
  private readonly logger = new Logger(ShareService.name);
  private readonly FB_API_VERSION = 'v19.0';

  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.share.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    return this.prisma.share.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.share.findFirst({
      where: { 
        OR: [
          { id: slug }
        ]
      },
    });
  }

  async createShare(userId: string, venueId: string, platform: string, content: string, mediaUrl?: string) {
    // Create a social share record
    try {
      this.logger.log(`Creating share for user ${userId} at venue ${venueId} on ${platform}`);
      
      // Map platform string to enum
      let socialPlatform: 'FACEBOOK' | 'INSTAGRAM' | 'TIKTOK' | 'TWITTER' | 'WHATSAPP' | 'TELEGRAM' = 'FACEBOOK';
      switch (platform.toUpperCase()) {
        case 'FACEBOOK': socialPlatform = 'FACEBOOK'; break;
        case 'INSTAGRAM': socialPlatform = 'INSTAGRAM'; break;
        case 'TIKTOK': socialPlatform = 'TIKTOK'; break;
        case 'TWITTER': socialPlatform = 'TWITTER'; break;
        case 'WHATSAPP': socialPlatform = 'WHATSAPP'; break;
        case 'TELEGRAM': socialPlatform = 'TELEGRAM'; break;
        default: socialPlatform = 'FACEBOOK'; break;
      }
      
      const shareRecord = await this.prisma.share.create({
        data: {
          userId,
          type: 'VENUE', // Using VENUE as default ShareType
          platform: socialPlatform,
          content,
          status: 'PUBLISHED'
        }
      });
      
      return shareRecord;
    } catch (error) {
      this.logger.error('Failed to create share', error);
      throw error;
    }
  }

  async getUserShares(userId: string, limit: number = 20, offset: number = 0) {
    try {
      this.logger.log(`Getting shares for user ${userId}, limit: ${limit}, offset: ${offset}`);
      
      const shares = await this.prisma.share.findMany({
        where: { userId },
        take: limit,
        skip: offset,
        orderBy: { createdAt: 'desc' },
      });
      
      return {
        shares,
        total: shares.length,
        hasMore: shares.length === limit
      };
    } catch (error) {
      this.logger.error('Failed to get user shares', error);
      throw error;
    }
  }

  async shareToFacebook(accessToken: string, message: string, link?: string): Promise<boolean> {
    try {
      const url = `https://graph.facebook.com/me/feed`;
      const params: Record<string, string> = {
        message,
        access_token: accessToken,
      };
      if (link) params.link = link;
      await axios.post(url, params);
      return true;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        this.logger.error('Facebook share failed', error.response?.data || error.message);
      } else if (error instanceof Error) {
        this.logger.error('Facebook share failed', error.message);
      } else {
        this.logger.error('Facebook share failed', String(error));
      }
      return false;
    }
  }

  async shareToInstagram(accessToken: string, imageUrl: string, caption?: string): Promise<boolean> {
    try {
      const mediaUrl = `https://graph.facebook.com/${this.FB_API_VERSION}/me/media`;
      const mediaRes: AxiosResponse = await axios.post(mediaUrl, {
        image_url: imageUrl,
        caption,
        access_token: accessToken,
      });
      const creationId = mediaRes.data.id;
      if (!creationId) {
        this.logger.error('Instagram media creation failed: No creation ID returned');
        return false;
      }
      const publishUrl = `https://graph.facebook.com/${this.FB_API_VERSION}/me/media_publish`;
      await axios.post(publishUrl, {
        creation_id: creationId,
        access_token: accessToken,
      });
      return true;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        this.logger.error('Instagram share failed', error.response?.data || error.message);
      } else if (error instanceof Error) {
        this.logger.error('Instagram share failed', error.message);
      } else {
        this.logger.error('Instagram share failed', String(error));
      }
      return false;
    }
  }
}
