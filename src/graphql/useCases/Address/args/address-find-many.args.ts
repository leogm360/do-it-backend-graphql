import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  AddressWhereUniqueInput,
  AddressInclude,
  AddressOrderByWithRelationInput,
  AddressSelect,
  AddressWhereInput,
} from '../inputs';
import { AddressScalarFieldEnum } from '../enums';

@ArgsType()
export class AddressFindManyArgs implements Prisma.AddressFindManyArgs {
  cursor?: AddressWhereUniqueInput;
  distinct?: AddressScalarFieldEnum[];
  include?: AddressInclude;
  orderBy?: AddressOrderByWithRelationInput[];
  select?: AddressSelect;
  skip?: number;
  take?: number;
  where?: AddressWhereInput;
}
