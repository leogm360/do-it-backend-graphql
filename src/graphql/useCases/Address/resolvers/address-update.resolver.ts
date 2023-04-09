import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { Address } from '../models';
import { AddressUpdateArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => Address)
export class AddressUpdate {
  @Mutation(() => Address, { nullable: false })
  async addressUpdate(
    @Context() ctx: ExecutionContext,
    @Args() args: AddressUpdateArgs,
  ): Promise<Address> {
    return ctx.prisma.address.update(args);
  }
}
