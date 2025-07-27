import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class ShareService {
  private readonly logger = new Logger(ShareService.name);
  private readonly FB_API_VERSION = 'v19.0';

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
      // Instagram sharing via Graph API (business accounts only)
      // Make sure the Instagram account is a business account linked to Facebook
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
      // Step 2: Publish media object
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
