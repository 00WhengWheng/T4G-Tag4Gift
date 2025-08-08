
import { ScanResponseDto, CreateScanDto } from './dto/scan.dto';

@Injectable()
export class ScanService {
  constructor(private readonly prisma: PrismaService) {}

  async processScan(dto: CreateScanDto): Promise<ScanResponseDto> {
    // Validate tag
    const tag = await this.prisma.tag.findUnique({ where: { id: dto.tagId } });
    if (!tag) throw new Error('Tag not found');
    // Validate user
    const user = await this.prisma.user.findUnique({ where: { id: dto.userId } });
    if (!user) throw new Error('User not found');
    // Enforce 1 scan per user per day
    const today = new Date();
    today.setHours(0,0,0,0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const existingScan = await this.prisma.scan.findFirst({
      where: {
        userId: dto.userId,
        tagId: dto.tagId,
        createdAt: {
          gte: today,
          lt: tomorrow,
        },
      },
    });
    if (existingScan) {
      return {
        scanId: existingScan.id,
        userId: dto.userId,
        tagId: dto.tagId,
        coinId: existingScan.coin?.id ?? '',
        coinAmount: tag.coinsPerScan,
        scannedAt: existingScan.createdAt,
        expiredAt: existingScan.expiredAt,
        message: 'Already scanned today',
      };
    }
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
    // Award coin_scan
    const coin = await this.prisma.coin.create({
      data: {
        userId: dto.userId,
        coinType: 'SCAN',
        amount: tag.coinsPerScan,
        description: `Scanned tag ${tag.name}`,
        scanId: scan.id,
      },
    });
    // Update scan with coin reference
    await this.prisma.scan.update({
      where: { id: scan.id },
      data: { coin: { connect: { id: coin.id } } },
    });
    return {
      scanId: scan.id,
      userId: dto.userId,
      tagId: dto.tagId,
      coinId: coin.id,
      coinAmount: tag.coinsPerScan,
      scannedAt: scan.createdAt,
      expiredAt: scan.expiredAt,
      message: 'Scan successful',
    };
  }
}
