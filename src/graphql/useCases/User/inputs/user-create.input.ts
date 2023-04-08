import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UserCreateInput implements Prisma.UserCreateInput {
  id?: string;
  firstName: string;
  lastName: string;
  cpf: string;
  cellphone: string;
  createdAt?: Date;
  updatedAt?: Date;
}
