import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrazileanStates } from '@graphql/enums';
import { UserCreateNestedOneWithoutAddressInput } from '@graphql/useCases';

@InputType()
export class AddressCreateInput implements Prisma.AddressCreateInput {
  id?: string;
  street: string;
  number: number;
  city: string;
  @Field(() => BrazileanStates)
  state: keyof typeof BrazileanStates;
  user: UserCreateNestedOneWithoutAddressInput;
  zipCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}
