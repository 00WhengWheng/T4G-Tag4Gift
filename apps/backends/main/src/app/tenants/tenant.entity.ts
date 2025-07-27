import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TenantType, TenantStatus } from '@prisma/client';

@ObjectType()
export class Tenant {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => TenantType)
  type: TenantType;

  @Field(() => TenantStatus)
  status: TenantStatus;

  @Field()
  totalChallenges: number;

  @Field()
  totalUsers: number;

  @Field()
  totalGifts: number;

  @Field()
  maxActiveChallenges: number;

  @Field()
  maxUsersPerChallenge: number;

  @Field()
  maxTags: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
