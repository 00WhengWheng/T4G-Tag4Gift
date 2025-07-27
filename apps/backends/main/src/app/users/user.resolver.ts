import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  async user(@Args('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.userService.createUser(input);
  }

  @Mutation(() => User)
  async updateUser(@Args('id') id: string, @Args('input') input: CreateUserDto) {
    return this.userService.updateUser(id, input);
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('id') id: string) {
    await this.userService.deleteUser(id);
    return true;
  }
}
