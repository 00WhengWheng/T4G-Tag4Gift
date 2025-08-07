import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async scanTag(tagIdentifier: string, userId: string, scanType: 'QRCODE' | 'NFC' = 'QRCODE', latitude?: number, longitude?: number): Promise<{ success: boolean; reason?: string }> {
    // Find tag by identifier (could be QR code or NFC ID)
    const tag = await this.prisma.tag.findFirst({
      where: {
        OR: [
          { qrCode: tagIdentifier },
          { nfcId: tagIdentifier },
          { identifier: tagIdentifier },
        ],
        status: 'ACTIVE',
      },
    });
    if (!tag) return { success: false, reason: 'Tag not found or inactive' };

    // Check scan limits for user/tenant/tag
    const now = new Date();
    const twelveHoursAgo = new Date(now.getTime() - 12 * 60 * 60 * 1000);
    const scanCount = await this.prisma.tagScan.count({
      where: {
        userId,
        tagId: tag.id,
        createdAt: { gte: twelveHoursAgo },
      },
    });
    if (scanCount >= tag.maxScansPerUser) {
      return { success: false, reason: 'Scan limit reached for this tag' };
    }

    // Prevent duplicate scan within 12 hours
    const alreadyScanned = await this.prisma.userScannedTag.findUnique({
      where: { userId_tagId: { userId, tagId: tag.id } },
    });
    if (alreadyScanned) return { success: false, reason: 'Already scanned' };

    // Record scan event and associate to user/tenant
    await this.prisma.userScannedTag.create({
      data: { userId, tagId: tag.id },
    });

    await this.prisma.tagScan.create({
      data: {
        userId,
        tagId: tag.id,
        tenantId: tag.tenantId,
        scanType,
        latitude: latitude ?? tag.latitude,
        longitude: longitude ?? tag.longitude,
      },
    });

    // Create scan coin for user
    await this.prisma.coin.create({
      data: {
        userId,
        coinType: 'SCAN',
        amount: tag.coinsPerScan,
        description: `Scan at tag ${tag.id}`,
        scanId: tag.id,
      },
    });

    // Update tag scan count and last scanned timestamp
    await this.prisma.tag.update({
      where: { id: tag.id },
      data: {
        scanCount: { increment: 1 },
        updatedAt: new Date(),
      },
    });

    return { success: true };
  }

  async createTag(userId: string, venueId: string, latitude: number, longitude: number, nfcTagId?: string) {
    return this.prisma.tag.create({
      data: {
        name: `Tag ${Date.now()}`,
        identifier: nfcTagId || `tag_${Date.now()}`,
        type: 'QRCODE', // Using QRCODE as valid TagType
        latitude,
        longitude,
        venueId,
        tenantId: 'default-tenant', // This should come from the user context
        isActive: true,
        scanCount: 0,
      },
    });
  }

  async getUserTags(userId: string, limit: number = 20, offset: number = 0) {
    // Since Tag doesn't have userId, we need to find tags through TagScan or another relation
    return this.prisma.tag.findMany({
      where: { 
        tagScans: {
          some: { userId }
        }
      },
      take: limit,
      skip: offset,
      orderBy: { id: 'desc' }, // Use id instead of createdAt
    });
  }

  async findMany() {
    return this.prisma.tag.findMany({
      orderBy: { id: 'desc' }, // Use id instead of createdAt
    });
  }

  async findById(id: string) {
    return this.prisma.tag.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.tag.findFirst({
      where: { 
        OR: [
          { identifier: slug },
          { id: slug }
        ]
      },
    });
  }
}