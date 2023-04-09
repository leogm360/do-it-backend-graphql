import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { User } from '../models';
import { UserDeleteArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserDelete {
  @Mutation(() => User, { nullable: false })
  async userDelete(
    @Context() ctx: ExecutionContext,
    @Args() args: UserDeleteArgs,
  ): Promise<User> {
    return ctx.prisma.user.delete(args);
  }
}
