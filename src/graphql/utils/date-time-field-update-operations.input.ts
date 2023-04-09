import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class DateTimeFieldUpdateOperationsInput
  implements Prisma.DateTimeFieldUpdateOperationsInput
{
  set?: Date;
}
