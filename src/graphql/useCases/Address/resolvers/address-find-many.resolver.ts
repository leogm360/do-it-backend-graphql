import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { Address } from '../models';
import { AddressFindManyArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => Address)
export class AddressFindMany {
  @Query(() => [Address], { nullable: false })
  async addressFindMany(
    @Context() ctx: ExecutionContext,
    @Args() args: AddressFindManyArgs,
  ): Promise<Address[]> {
    return ctx.prisma.address.findMany(args);
  }
}
