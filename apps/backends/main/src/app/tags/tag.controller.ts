import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
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

export class ScanTagDto {
  tagIdentifier: string;
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
  ): Promise<boolean> {
    const userId = req.user?.userId;
    if (!userId) {
      throw new Error('User ID not found in JWT payload');
    }
    return this.tagService.scanTag(scanTagDto.tagIdentifier, userId);
  }
}
