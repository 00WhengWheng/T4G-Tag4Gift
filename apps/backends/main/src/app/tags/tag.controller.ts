import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { IsString, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { TagService } from './tag.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

export class User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  dateOfBirth?: Date;
  role: string;
  status: string;
  authProvider: string;
}

  @IsString()
  tagIdentifier: string;

  @IsEnum(['QRCODE', 'NFC'], { message: 'scanType must be QRCODE or NFC' })
  @IsOptional()
  scanType?: 'QRCODE' | 'NFC';

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;
}
}

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  me(@Request() req: any): User | null {
    const user = req.user;
    if (!user) return null;
    return {
      id: user.userId,
      email: user.email || '',
      username: user.username || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      phone: user.phone,
      avatar: user.avatar,
      dateOfBirth: user.dateOfBirth,
      role: user.role || '',
      status: user.status || '',
      authProvider: user.authProvider || '',
    };
  }

  @Post('scan')
  @UseGuards(JwtAuthGuard)
  async scanTag(
    @Body() scanTagDto: ScanTagDto,
    @Request() req: any
  ): Promise<{ success: boolean; reason?: string }> {
    const userId = req.user?.userId;
    if (!userId) {
      throw new Error('User ID not found in JWT payload');
    }
    const scanType = scanTagDto.scanType || 'QRCODE';
    const latitude = scanTagDto.latitude;
    const longitude = scanTagDto.longitude;
    return this.tagService.scanTag(scanTagDto.tagIdentifier, userId, scanType, latitude, longitude);
  }
}
