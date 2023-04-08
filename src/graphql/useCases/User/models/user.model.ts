import { ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma/client';

@ObjectType()
export class User implements PrismaUser {
  id: string;
  cpf: string;
  firstName: string;
  lastName: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}
