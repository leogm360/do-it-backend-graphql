import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { User } from '../models';
import { UserUpdateArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserUpdate {
  @Mutation(() => User, { nullable: false })
  async userUpdate(
    @Context() ctx: ExecutionContext,
    @Args() args: UserUpdateArgs,
  ): Promise<User> {
    return ctx.prisma.user.update(args);
  }
}
