import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrazileanStates } from '@graphql/enums';

@InputType()
export class EnumBrazileanStatesFieldUpdateOperationsInput
  implements Prisma.EnumBrazileanStatesFieldUpdateOperationsInput
{
  @Field(() => BrazileanStates)
  set?: keyof typeof BrazileanStates;
}
