import { Field, ObjectType } from '@nestjs/graphql';
import { Address as PrismaAddress } from '@prisma/client';
import { BrazileanStates } from '@graphql/enums';

@ObjectType()
export class Address implements PrismaAddress {
  id: string;
  street: string;
  number: number;
  @Field(() => BrazileanStates)
  state: keyof typeof BrazileanStates;
  city: string;
  zipCode: string;
  userId: string;
  updatedAt: Date;
  createdAt: Date;
}
