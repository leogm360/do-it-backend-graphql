import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '../models';
import { UserCreateArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserCreate {
  @Query(() => User, { nullable: false })
  async userCreate(
    @Context() ctx: ExecutionContext,
    @Args() args: UserCreateArgs,
  ): Promise<User> {
    return ctx.prisma.user.create(args);
  }
}
