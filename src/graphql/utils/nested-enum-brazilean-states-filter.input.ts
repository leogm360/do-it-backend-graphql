import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrazileanStates } from '@graphql/enums';

@InputType()
export class NestedEnumBrazileanStatesFilter
  implements Prisma.NestedEnumBrazileanStatesFilter
{
  @Field(() => BrazileanStates)
  equals?: keyof typeof BrazileanStates;
  @Field(() => [BrazileanStates])
  in?: BrazileanStates[];
  not?: NestedEnumBrazileanStatesFilter;
  @Field(() => [BrazileanStates])
  notIn?: BrazileanStates[];
}
