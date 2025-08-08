import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { UserService } from '../../user/user.service';

// Input validation schemas
const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(50),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  password: z.string().min(8),
  role: z.enum(['USER', 'ADMIN']).default('USER'),
  status: z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']).default('ACTIVE'),
  authProvider: z.enum(['LOCAL', 'GOOGLE', 'FACEBOOK', 'APPLE']).default('LOCAL'),
  language: z.string().default('en'),
  timezone: z.string().default('UTC'),
  isEmailVerified: z.boolean().default(false),
  isPhoneVerified: z.boolean().default(false),
  totalPoints: z.number().default(0),
  level: z.number().default(1),
  phone: z.string().optional(),
  avatar: z.string().optional(),
  dateOfBirth: z.date().optional(),
  tenantId: z.string().optional(),
  lastLoginIp: z.string().optional(),
});

const updateUserSchema = createUserSchema.partial().omit({ password: true });

const userIdSchema = z.object({
  id: z.string(),
});

const userEmailSchema = z.object({
  email: z.string().email(),
});

@Injectable()
export class UsersRouter {
  constructor(private readonly userService: UserService) {}

  getRoutes() {
    return router({
      create: publicProcedure
        .input(createUserSchema)
        .mutation(async ({ input }) => {
          // Transform input to match CreateUserDto with defaults
          const userInput = {
            ...input,
            role: input.role || 'USER',
            status: input.status || 'ACTIVE',
            authProvider: input.authProvider || 'LOCAL',
            language: input.language || 'en',
            timezone: input.timezone || 'UTC',
            isEmailVerified: input.isEmailVerified ?? false,
            isPhoneVerified: input.isPhoneVerified ?? false,
            totalPoints: input.totalPoints ?? 0,
            level: input.level ?? 1,
          } as any;
          return await this.userService.createUser(userInput);
        }),

      findById: publicProcedure
        .input(userIdSchema)
        .query(async ({ input }) => {
          return await this.userService.findUserById(input.id);
        }),

      findByEmail: publicProcedure
        .input(userEmailSchema)
        .query(async ({ input }) => {
          return await this.userService.findUserByEmail(input.email);
        }),

      update: publicProcedure
        .input(z.object({
          id: z.string(),
          data: updateUserSchema,
        }))
        .mutation(async ({ input }) => {
          return await this.userService.updateUser(input.id, input.data);
        }),

      delete: publicProcedure
        .input(userIdSchema)
        .mutation(async ({ input }) => {
          return await this.userService.deleteUser(input.id);
        }),
    });
  }
}
