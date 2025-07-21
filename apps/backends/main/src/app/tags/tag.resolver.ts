import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { TagService } from './tag.service';

@Resolver()
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Mutation(() => Boolean)
  async scanTag(
    @Args('tagIdentifier') tagIdentifier: string,
    @Context() ctx: any // JWT integration later
  ): Promise<boolean> {
    // For now, get userId from context/session (replace with JWT later)
    const userId = ctx.req.user?.id || 'demo-user-id';
    return this.tagService.scanTag(tagIdentifier, userId);
  }
}