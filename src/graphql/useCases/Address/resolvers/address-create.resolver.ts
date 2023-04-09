import { Resolver, Context, Args, Mutation } from '@nestjs/graphql';
import { Address } from '../models';
import { AddressCreateArgs } from '../args';
import { ExecutionContext } from '@types';

@Resolver(() => Address)
export class AddressCreate {
  @Mutation(() => Address, { nullable: false })
  async addressCreate(
    @Context() ctx: ExecutionContext,
    @Args() args: AddressCreateArgs,
  ): Promise<Address> {
    return ctx.prisma.address.create(args);
  }
}
