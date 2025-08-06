import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@t4g/database';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    // Basic validation logic
    if (!data.email || !data.username || !data.firstName || !data.lastName || !data.password) {
      throw new BadRequestException('Missing required user fields');
    }
    // Password strength validation (simple example)
    if (data.password.length < 8) {
      throw new BadRequestException('Password must be at least 8 characters long');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);
    // Build Prisma.UserCreateInput explicitly
    const { tenantId, password, ...rest } = data;
    const prismaData: Prisma.UserCreateInput = {
      ...rest,
      password: hashedPassword,
      ...(tenantId ? { tenant: { connect: { id: tenantId } } } : {}),
    };
    return this.prisma.user.create({ data: prismaData });
  }

  async findUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateUser(id: string, data: Partial<CreateUserDto>) {
    // Optionally, validate data before update
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.delete({ where: { id } });
  }

  async findByAuth0Id(auth0Id: string) {
    const user = await this.prisma.user.findUnique({ 
      where: { auth0Id },
      include: {
        coinBalances: true,
      }
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async findOrCreateByAuth0Id(auth0Id: string, userInfo?: {
    email?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
  }) {
    // Try to find existing user
    let user = await this.prisma.user.findUnique({ 
      where: { auth0Id },
      include: {
        coinBalances: true,
      }
    });

    // If user doesn't exist, create them
    if (!user && userInfo) {
      const userData: Prisma.UserCreateInput = {
        auth0Id,
        email: userInfo.email || `${auth0Id}@temp.com`,
        username: userInfo.username || `user_${auth0Id.slice(-8)}`,
        firstName: userInfo.firstName || 'User',
        lastName: userInfo.lastName || '',
        password: '', // No password needed for Auth0 users
        role: 'USER',
        status: 'ACTIVE',
        authProvider: 'LOCAL', // Using LOCAL since AUTH0 is not in the enum
        language: 'en',
        timezone: 'UTC',
        isEmailVerified: true, // Auth0 handles verification
        isPhoneVerified: false,
        totalPoints: 0,
        level: 1,
        coinBalances: {
          create: {
            tagCoins: 0,
            shareCoins: 0,
            gameCoins: 0,
            totalCoins: 0,
          }
        }
      };

      user = await this.prisma.user.create({ 
        data: userData,
        include: {
          coinBalances: true,
        }
      });
    }

    if (!user) throw new NotFoundException('User not found and could not be created');
    return user;
  }

  async getUserProfile(auth0Id: string) {
    const user = await this.prisma.user.findUnique({
      where: { auth0Id },
      include: {
        coinBalances: true,
        challengePasses: {
          where: {
            usedAt: null, // Only get unused passes
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
        coinTransactions: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 10, // Last 10 transactions
        },
        _count: {
          select: {
            coinTransactions: true,
            challengePasses: true,
          },
        },
      },
    });

    if (!user) throw new NotFoundException('User not found');

    // Don't return password in profile
    const { password, ...userProfile } = user;
    return userProfile;
  }

  async updateProfile(auth0Id: string, profileData: {
    first_name?: string;
    last_name?: string;
    display_name?: string;
    email?: string;
  }) {
    const user = await this.prisma.user.findFirst({ 
      where: { 
        OR: [
          { email: auth0Id },
          { username: auth0Id }
        ]
      } 
    });
    if (!user) throw new NotFoundException('User not found');
    
    return this.prisma.user.update({ 
      where: { id: user.id }, 
      data: {
        firstName: profileData.first_name || user.firstName,
        lastName: profileData.last_name || user.lastName,
        email: profileData.email || user.email,
        // displayName doesn't exist in schema, skip it
      }
    });
  }
}
