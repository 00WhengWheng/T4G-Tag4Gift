import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';

export interface CreateScanDto {
  userId: string;
  tagId: string;
  ipAddress?: string;
  userAgent?: string;
}

@Injectable()
export class ScanService {
  constructor(private readonly prisma: PrismaService) {}

  async processScan(dto: CreateScanDto) {
    // Validate tag
    const tag = await this.prisma.tag.findUnique({ where: { id: dto.tagId } });
    if (!tag) throw new Error('Tag not found');
    // Validate user
    const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
    if (!user) throw new Error('User not found');
    // Check scan limit
    const today = new Date();
    today.setHours(0,0,0,0);
    const scanCount = await this.prisma.scan.count({
      where: {
        userId: dto.userId,
        tagId: dto.tagId,
        createdAt: { gte: today },
      },
    });
    if (scanCount >= tag.maxScansPerUser) throw new Error('Scan limit reached');
    // Create scan
    const scan = await this.prisma.scan.create({
      data: {
        userId: dto.userId,
        tagId: dto.tagId,
        ipAddress: dto.ipAddress,
        userAgent: dto.userAgent,
        expiredAt: new Date(Date.now() + 12 * 60 * 60 * 1000),
      },
    });
    // Award coins
    await this.prisma.coin.create({
      data: {
        userId: dto.userId,
        coinType: 'SCAN',
        amount: tag.coinsPerScan,
        description: `Scanned tag ${tag.name}`,
        scanId: scan.id,
      },
    });
    return scan;
  }
}
