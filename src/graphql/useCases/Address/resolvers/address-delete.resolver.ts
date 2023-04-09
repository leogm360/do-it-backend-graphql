import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { Address } from '../models';
import { AddressDeleteArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => Address)
export class AddressDelete {
  @Mutation(() => Address, { nullable: false })
  async addressDelete(
    @Context() ctx: ExecutionContext,
    @Args() args: AddressDeleteArgs,
  ): Promise<Address> {
    return ctx.prisma.address.delete(args);
  }
}
