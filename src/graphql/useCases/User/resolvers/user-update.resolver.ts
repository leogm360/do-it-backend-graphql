import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '../models';
import { UserUpdateArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserUpdate {
  @Query(() => User, { nullable: false })
  async userUpdate(
    @Context() ctx: ExecutionContext,
    @Args() args: UserUpdateArgs,
  ): Promise<User> {
    return ctx.prisma.user.update(args);
  }
}
