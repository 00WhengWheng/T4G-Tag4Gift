import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JWT Auth Guard for Business Platform
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
