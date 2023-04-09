import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class AddressInclude implements Prisma.AddressInclude {
  user?: boolean;
}
