import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { StringFilter, DateTimeFilter } from '@graphql/utils';

@InputType()
export class UserWhereInput implements Prisma.UserWhereInput {
  AND?: UserWhereInput[];
  NOT?: UserWhereInput[];
  OR?: UserWhereInput[];
  id?: StringFilter;
  firstName?: StringFilter;
  lastName?: StringFilter;
  cpf?: StringFilter;
  cellphone?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
}
