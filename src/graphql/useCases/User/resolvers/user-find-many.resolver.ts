import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { User } from '../models';
import { UserFindManyArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => User)
export class UserFindMany {
  @Query(() => [User], { nullable: false })
  async userFindMany(
    @Context() ctx: ExecutionContext,
    @Args() args: UserFindManyArgs,
  ): Promise<User[]> {
    return ctx.prisma.user.findMany(args);
  }
}
