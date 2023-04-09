import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class AddressSelect implements Prisma.AddressSelect {
  id?: boolean;
  street?: boolean;
  number?: boolean;
  city?: boolean;
  state?: boolean;
  zipCode?: boolean;
  userId?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}
