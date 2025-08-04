import { Injectable } from '@nestjs/common';

/**
 * Business Authentication Service
 * Handles Auth0 business authentication logic
 */
@Injectable()
export class AuthService {
  async validateUser(payload: any) {
    // TODO: Implement business user validation
    return { userId: payload.sub, email: payload.email };
  }
}
