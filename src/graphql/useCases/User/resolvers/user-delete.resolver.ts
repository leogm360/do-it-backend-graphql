import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '../models';
import { UserDeleteArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserDelete {
  @Query(() => User, { nullable: false })
  async userDelete(
    @Context() ctx: ExecutionContext,
    @Args() args: UserDeleteArgs,
  ): Promise<User> {
    return ctx.prisma.user.delete(args);
  }
}
