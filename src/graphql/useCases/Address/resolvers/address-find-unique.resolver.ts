import { Resolver, Query, Context, Args } from '@nestjs/graphql';
import { Address } from '../models';
import { AddressFindUniqueArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => Address)
export class AddressFindUnique {
  @Query(() => Address, { nullable: true })
  async addressFindUnique(
    @Context() ctx: ExecutionContext,
    @Args() args: AddressFindUniqueArgs,
  ): Promise<Address | null> {
    return ctx.prisma.address.findUnique(args);
  }
}
