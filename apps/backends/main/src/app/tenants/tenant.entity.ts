import { ObjectType, Field, ID } from '@nestjs/graphql';
import { TenantStatus } from './enums/tenant-status.enum';
import { TenantType } from './enums/tenant-type.enum';

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
