import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../../prisma/prisma.service';

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
}