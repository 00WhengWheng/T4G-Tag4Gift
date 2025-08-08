import { Controller, Get, UseGuards, UnauthorizedException } from '@nestjs/common';
import { User } from './user.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { Request } from 'express';

interface JwtPayload {
  sub: string;
  email: string;
  name?: string;
  permissions?: string[];
  roles?: string[];
  iat?: number;
  exp?: number;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@User() user: JwtPayload) {
    if (!user) throw new UnauthorizedException('No user found');
    return {
      success: true,
      data: this.authService.getProfile(user),
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('session')
  getSession(@User() user: JwtPayload) {
    if (!user) throw new UnauthorizedException('No user found');
    return {
      success: true,
      data: this.authService.getSession(user),
    };
  }
}
