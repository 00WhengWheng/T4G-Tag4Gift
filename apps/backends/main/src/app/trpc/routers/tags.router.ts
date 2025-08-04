import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { TagService } from '../../tags/tag.service';

const ScanTagInput = z.object({
  tagIdentifier: z.string().min(1, 'Tag identifier is required'),
  userId: z.string().min(1, 'User ID is required'),
});

const UserResponse = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  avatar: z.string().optional(),
  dateOfBirth: z.date().optional(),
  role: z.string(),
  status: z.string(),
  authProvider: z.string(),
});

@Injectable()
export class TagsRouter {
  constructor(private readonly tagService: TagService) {}

  getRoutes() {
    return router({
      me: publicProcedure
        .input(z.object({ userId: z.string() }))
        .output(UserResponse.nullable())
        .query(async ({ input }) => {
          // This would typically get user from JWT context
          // For now returning mock data structure
          return {
            id: input.userId,
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            role: '',
            status: '',
            authProvider: '',
          };
        }),

      scanTag: publicProcedure
        .input(ScanTagInput)
        .output(z.boolean())
        .mutation(async ({ input }) => {
          const { tagIdentifier, userId } = input;
          return await this.tagService.scanTag(tagIdentifier, userId);
        }),
    });
  }
}
