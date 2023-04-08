import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SortOrder } from '@graphql/enums';

@InputType()
export class UserOrderByWithRelationInput
  implements Prisma.UserOrderByWithRelationInput
{
  id?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  cpf?: SortOrder;
  cellphone?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}
