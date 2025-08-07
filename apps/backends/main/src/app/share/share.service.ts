/**
   * Share a post to Facebook Page (tenant account) and log to DB
   */
  async shareToFacebookPage(
    pageAccessToken: string,
    message: string,
    link: string | undefined,
    userId?: string,
    tenantId?: string
  ): Promise<{ id: string; dbRecord?: any }> {
    const url = `https://graph.facebook.com/v19.0/me/feed`;
    const params: Record<string, string> = {
      message,
      access_token: pageAccessToken,
    };
    if (link) params.link = link;
    const response = await this.axiosPost(url, params);
    let dbRecord;
      dbRecord = await this.createShare({
        userId,
        tenantId,
        import { Injectable, Logger } from '@nestjs/common';
        import { PrismaService } from '@t4g/database';
        import { ShareType } from '@prisma/client';

        @Injectable()
        export class ShareService {
          private readonly logger = new Logger(ShareService.name);

          constructor(private readonly prisma: PrismaService) {}

          /**
           * Share a post to Facebook Page (tenant account) and log to DB
           */
          async shareToFacebookPage(
            pageAccessToken: string,
            message: string,
            link: string | undefined,
            userId: string,
            tenantId: string
          ): Promise<{ id: string; dbRecord?: any }> {
            const url = `https://graph.facebook.com/v19.0/me/feed`;
            const params: Record<string, string> = {
              message,
              access_token: pageAccessToken,
            };
            if (link) params.link = link;
            const response = await this.axiosPost(url, params);
            // Log to DB using schema2.prisma Share model
            const dbRecord = await this.createShare({
              userId,
              tenantId,
              socialType: 'FACEBOOK',
              shareUrl: response.id,
            });
            return { id: response.id, dbRecord };
          }

          /**
           * Share a photo to Instagram Business Account (tenant account) and log to DB
           */
          async shareToInstagramBusiness(
            accessToken: string,
            imageUrl: string,
            caption: string | undefined,
            userId: string,
            tenantId: string
          ): Promise<{ id: string; dbRecord?: any }> {
            // Step 1: Create media object
            const mediaRes = await this.axiosPost(
              `https://graph.facebook.com/v19.0/me/media`,
              {
                image_url: imageUrl,
                caption,
                access_token: accessToken,
              }
            );
            const creationId = mediaRes.id;
            // Step 2: Publish media
            const publishRes = await this.axiosPost(
              `https://graph.facebook.com/v19.0/me/media_publish`,
              {
                creation_id: creationId,
                access_token: accessToken,
              }
            );
            // Log to DB using schema2.prisma Share model
            const dbRecord = await this.createShare({
              userId,
              tenantId,
              socialType: 'INSTAGRAM',
              shareUrl: publishRes.id,
            });
            return { id: publishRes.id, dbRecord };
          }

          /**
           * Internal helper for POST requests
           */
          private async axiosPost(url: string, data: any): Promise<any> {
            const res = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(`Facebook API error: ${res.statusText}`);
            return await res.json();
          }

          /**
           * Create a social share record in the database
           */
          async createShare({
            userId,
            tenantId,
            socialType,
            shareUrl,
          }: {
            userId: string;
            tenantId: string;
            socialType: ShareType;
            shareUrl?: string;
          }): Promise<any> {
            try {
              this.logger.log(`Creating share for user ${userId} and tenant ${tenantId} on ${socialType}`);
              const shareRecord = await this.prisma.share.create({
                data: {
                  userId,
                  tenantId,
                  socialType,
                  shareUrl,
                }
              });
              // After creating share, create associated coin record
              await this.prisma.coin.create({
                data: {
                  userId,
                  coinType: 'SHARE',
                  amount: 1, // or configurable
                  description: `Coin for sharing (${shareRecord.id})`,
                  shareId: shareRecord.id,
                }
              });
              return shareRecord;
            } catch (error) {
              this.logger.error('Failed to create share or coin', error);
              throw error;
            }
          }

          /**
           * Get shares for a user
           */
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

          /**
           * Find share by ID
           */
          async findById(id: string) {
            return this.prisma.share.findUnique({
              where: { id },
            });
          }

          /**
           * Find share by slug
           */
          async findBySlug(slug: string) {
            return this.prisma.share.findFirst({
              where: { id: slug },
            });
          }
        }

