import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AddressSelect, AddressInclude, AddressCreateInput } from '../inputs';

@ArgsType()
export class AddressCreateArgs implements Prisma.AddressCreateArgs {
  select?: AddressSelect;
  include?: AddressInclude;
  data: AddressCreateInput;
}
