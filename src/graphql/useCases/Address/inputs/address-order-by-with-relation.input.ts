import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SortOrder } from '@graphql/enums';

@InputType()
export class AddressOrderByWithRelationInput
  implements Prisma.AddressOrderByWithRelationInput
{
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  number?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  zipCode?: SortOrder;
}
