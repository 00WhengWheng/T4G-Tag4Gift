import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async scanTag(tagIdentifier: string, userId: string): Promise<boolean> {
    const tag = await this.prisma.tag.findUnique({ where: { identifier: tagIdentifier } });
    if (!tag || !tag.isActive) return false;

    // Prevent duplicate scans
    const alreadyScanned = await this.prisma.userScannedTag.findUnique({
      where: { userId_tagId: { userId, tagId: tag.id } },
    });
    if (alreadyScanned) return false;

    // Record scan event
    await this.prisma.userScannedTag.create({
      data: { userId, tagId: tag.id },
    });

    await this.prisma.tagScan.create({
      data: {
        userId,
        tagId: tag.id,
        tenantId: tag.tenantId,
        scanType: 'QR_CODE',
      },
    });

    // Update tag scan count and last scanned timestamp
    await this.prisma.tag.update({
      where: { id: tag.id },
      data: {
        scanCount: { increment: 1 },
        lastScannedAt: new Date(),
      },
    });

    return true;
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