import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CreateTenantDto } from './tenant.dto';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async createTenant(dto: CreateTenantDto) {
    // Create tenant with social accounts
    const tenant = await this.prisma.tenant.create({
      data: {
        name: dto.name,
        email: dto.email,
        address: dto.address,
        city: dto.city,
        country: dto.country,
        vatNumber: dto.vatNumber,
        legalName: dto.legalName,
        googleMap: dto.googleMap,
        facebook: dto.facebook,
        instagram: dto.instagram,
        tiktok: dto.tiktok,
        website: dto.website,
        logo: dto.logo,
        venueType: dto.venueType,
      },
    });

    // Create a default tag with QR code assigned
    const tag = await this.prisma.tag.create({
      data: {
        tenantId: tenant.id,
        name: `${tenant.name} Main Tag`,
        description: `Default tag for ${tenant.name}`,
        qrCode: `QR-${tenant.id}-${Date.now()}`,
        status: 'ACTIVE',
      },
    });

    return { tenant, tag };
  }

  async getTenantUserStats(tenantId: string) {
    // Aggregate statistics for users belonging to this tenant
    const totalUsers = await this.prisma.user.count({ where: { tenantId } });
    const totalGiftsAwarded = await this.prisma.userGift.count({ where: { gift: { tenantId } } });
    const totalChallengesCompleted = await this.prisma.challengeParticipant.count({
      where: {
        challenge: { tenantId },
        status: 'COMPLETED',
      },
    });
    return {
      totalUsers,
      totalGiftsAwarded,
      totalChallengesCompleted,
    };
  }

  async getUserInteractions(tenantId: string) {
    // Return detailed user interaction stats for this tenant
    return this.prisma.user.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        totalPoints: true,
        level: true,
        awardedGifts: { select: { gift: true } },
        challengeParticipants: {
          select: {
            challenge: true,
            status: true,
            score: true,
          },
        },
      },
    });
  }
}
