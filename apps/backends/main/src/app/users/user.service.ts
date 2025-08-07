import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@t4g/database';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    // Basic validation logic
    if (!data.email || !data.username || !data.firstName || !data.lastName || !data.password) {
      throw new BadRequestException('Missing required user fields');
    }
    // Check for duplicate email/username
    const existing = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: data.email },
          { username: data.username }
        ]
      }
    });
    if (existing) throw new ConflictException('Email or username already exists');
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

  async updateUser(id: string, data: Partial<UpdateUserDto>) {
    // Optionally, validate data before update
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    // Prevent email/username duplication
    if (data.email && data.email !== user.email) {
      const emailExists = await this.prisma.user.findUnique({ where: { email: data.email } });
      if (emailExists) throw new ConflictException('Email already exists');
    }
    if (data.username && data.username !== user.username) {
      const usernameExists = await this.prisma.user.findUnique({ where: { username: data.username } });
      if (usernameExists) throw new ConflictException('Username already exists');
    }
    // Hash password if updating
    if (data.password) {
      if (data.password.length < 8) throw new BadRequestException('Password must be at least 8 characters long');
      data.password = await bcrypt.hash(data.password, 10);
    }
    return this.prisma.user.update({ where: { id }, data });
  async listUsers(limit = 20, offset = 0) {
    const users = await this.prisma.user.findMany({
      take: limit,
      skip: offset,
      orderBy: { createdAt: 'desc' },
    });
    const total = await this.prisma.user.count();
    return {
      users,
      total,
      hasMore: users.length === limit
    };
  }
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return this.prisma.user.delete({ where: { id } });
  }

  async findByAuth0Id(auth0Id: string) {
    // Since auth0Id field doesn't exist, we'll use email or username as identifier
    const user = await this.prisma.user.findFirst({ 
      where: { 
        OR: [
          { email: auth0Id },
          { username: auth0Id }
        ]
      } 
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
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
