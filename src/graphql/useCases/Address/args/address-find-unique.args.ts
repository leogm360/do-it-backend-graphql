import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  AddressInclude,
  AddressSelect,
  AddressWhereUniqueInput,
} from '../inputs';

@ArgsType()
export class AddressFindUniqueArgs implements Prisma.AddressFindUniqueArgs {
  include?: AddressInclude;
  select?: AddressSelect;
  where: AddressWhereUniqueInput;
}
