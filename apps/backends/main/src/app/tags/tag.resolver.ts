import { Resolver, Mutation, Args, Context, Query, ObjectType, Field } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GqlExecutionContext } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  dateOfBirth?: Date;

  @Field()
  role: string;

  @Field()
  status: string;

  @Field()
  authProvider: string;
}

@Resolver()
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query(() => User, { nullable: true })
  @UseGuards(JwtAuthGuard)
  me(@Context() ctx: GqlExecutionContext): User | null {
    const request = ctx.getContext().req;
    const user = request.user;
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

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  async scanTag(
    @Args('tagIdentifier') tagIdentifier: string,
    @Context() ctx: GqlExecutionContext
  ): Promise<boolean> {
    const request = ctx.getContext().req;
    const userId = request.user?.userId;
    if (!userId) {
      throw new Error('User ID not found in JWT payload');
    }
    return this.tagService.scanTag(tagIdentifier, userId);
  }
}