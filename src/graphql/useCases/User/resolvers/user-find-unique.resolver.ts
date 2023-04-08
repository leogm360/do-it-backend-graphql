import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '../models';
import { UserFindUniqueArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserFindUnique {
  @Query(() => User, { nullable: true })
  async userFindUnique(
    @Context() ctx: ExecutionContext,
    @Args() args: UserFindUniqueArgs,
  ): Promise<User | null> {
    return ctx.prisma.user.findUnique(args);
  }
}
