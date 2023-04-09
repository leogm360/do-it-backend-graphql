import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  AddressUpdateInput,
  AddressInclude,
  AddressSelect,
  AddressWhereUniqueInput,
} from '../inputs';

@ArgsType()
export class AddressUpdateArgs implements Prisma.AddressUpdateArgs {
  data: AddressUpdateInput;
  include?: AddressInclude;
  select?: AddressSelect;
  where: AddressWhereUniqueInput;
}
