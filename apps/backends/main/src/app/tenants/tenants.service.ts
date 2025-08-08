import { Injectable } from '@nestjs/common';
import { PrismaService } from '@t4g/database';
import { CreateTenantDto } from './dto/tenants.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Create tenant and automatically create a default tag and venue for it
   * @param data - tenant creation DTO
   * @param tagInfo - { name, latitude, longitude, description? }
   * @param venueInfo - { name, address, latitude, longitude, description? }
   */
  async createTenantWithDefaults(
    data: CreateTenantDto,
    tagInfo: { name: string; latitude: number; longitude: number; description?: string },
    venueInfo: { name: string; address: string; latitude: number; longitude: number; description?: string }
  ) {
    // Create tenant
    const tenant = await this.prisma.tenant.create({
      data: {
        ...data,
        venueType: data.venueType as any,
      },
    });

    // Generate unique QR code and NFC ID
    const qrCode = uuidv4();
    const nfcId = uuidv4();

    // Create default tag for tenant
    const tag = await this.prisma.tag.create({
      data: {
        tenantId: tenant.id,
        name: tagInfo.name,
        description: tagInfo.description ?? '',
        location: `${tagInfo.latitude},${tagInfo.longitude}`,
        status: 'ACTIVE',
        scanCount: 0,
        maxScansPerUser: 10,
        coinsPerScan: 10,
        qrCode,
        nfcId,
      },
    });

    // Create default venue for tenant
    const venue = await this.prisma.venue.create({
      data: {
        tenantId: tenant.id,
        name: venueInfo.name,
        address: venueInfo.address,
        description: venueInfo.description ?? '',
        latitude: venueInfo.latitude,
        longitude: venueInfo.longitude,
        isActive: true,
      },
    });

    return { tenant, tag, venue };
  }
