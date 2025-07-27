import { ObjectType, Field, ID } from '@nestjs/graphql';
import { UserRole, UserStatus, AuthProvider } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => ID)
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

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => UserStatus)
  status: UserStatus;

  @Field(() => AuthProvider)
  authProvider: AuthProvider;

  @Field()
  language: string;

  @Field()
  timezone: string;

  @Field()
  isEmailVerified: boolean;

  @Field()
  isPhoneVerified: boolean;

  @Field()
  totalPoints: number;

  @Field()
  level: number;

  @Field({ nullable: true })
  tenantId?: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  lastLoginIp?: string;
}
