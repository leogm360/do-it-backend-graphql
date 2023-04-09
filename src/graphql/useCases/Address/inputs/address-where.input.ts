import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  StringFilter,
  IntFilter,
  EnumBrazileanStatesFilter,
  DateTimeFilter,
} from '@graphql/utils';

@InputType()
export class AddressWhereInput implements Prisma.AddressWhereInput {
  AND?: AddressWhereInput[];
  NOT?: AddressWhereInput[];
  OR?: AddressWhereInput[];
  id?: StringFilter;
  street?: StringFilter;
  number?: IntFilter;
  city?: StringFilter;
  state?: EnumBrazileanStatesFilter;
  zipCode?: StringFilter;
  userId?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}
