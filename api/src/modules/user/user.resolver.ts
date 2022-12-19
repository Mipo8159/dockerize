import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './inputs/reate-user.input';
import { UserOutput } from './outputs/user.output';

@Resolver(() => UserOutput)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserOutput)
  createUser(@Args('createUserInput') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(() => [UserOutput], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => UserOutput, { name: 'user' })
  findOne(@Args('id') id: number) {
    return this.userService.findOne(id);
  }
}
