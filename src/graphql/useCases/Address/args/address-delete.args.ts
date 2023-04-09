import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  AddressInclude,
  AddressSelect,
  AddressWhereUniqueInput,
} from '../inputs';

@ArgsType()
export class AddressDeleteArgs implements Prisma.AddressDeleteArgs {
  include?: AddressInclude;
  select?: AddressSelect;
  where: AddressWhereUniqueInput;
}
