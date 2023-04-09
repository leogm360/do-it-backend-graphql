import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BrazileanStates } from '@graphql/enums';
import { NestedEnumBrazileanStatesFilter } from './nested-enum-brazilean-states-filter.input';

@InputType()
export class EnumBrazileanStatesFilter
  implements Prisma.EnumBrazileanStatesFilter
{
  @Field(() => BrazileanStates)
  equals?: keyof typeof BrazileanStates;
  @Field(() => [BrazileanStates])
  in?: BrazileanStates[];
  not?: NestedEnumBrazileanStatesFilter;
  @Field(() => [BrazileanStates])
  notIn?: BrazileanStates[];
}
