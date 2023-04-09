import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class IntFieldUpdateOperationsInput
  implements Prisma.IntFieldUpdateOperationsInput
{
  decrement?: number;
  divide?: number;
  increment?: number;
  multiply?: number;
  set?: number;
}
