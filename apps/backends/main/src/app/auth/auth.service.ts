import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getProfile(user: any) {
    // Return basic user info from JWT payload
    return {
      sub: user?.sub,
      email: user?.email,
      name: user?.name,
      permissions: user?.permissions,
      roles: user?.roles,
      // Add more fields as needed
    };
  }

  getSession(user: any) {
    // Return session info (token claims, etc.)
    return {
      user,
      issuedAt: user?.iat,
      expiresAt: user?.exp,
    };
  }
}
