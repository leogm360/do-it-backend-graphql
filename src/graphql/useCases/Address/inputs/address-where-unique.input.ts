import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class AddressWhereUniqueInput implements Prisma.AddressWhereUniqueInput {
  id?: string;
  userId?: string;
}
