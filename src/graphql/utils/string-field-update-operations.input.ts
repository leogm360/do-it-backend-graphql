import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class StringFieldUpdateOperationsInput
  implements Prisma.StringFieldUpdateOperationsInput
{
  set?: string;
}
