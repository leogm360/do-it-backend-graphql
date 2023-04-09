import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NestedIntFilter } from './nested-int-filter.input';

@InputType()
export class IntFilter implements Prisma.IntFilter {
  equals?: number;
  gt?: number;
  gte?: number;
  in?: number;
  lt?: number;
  lte?: number;
  not?: NestedIntFilter;
  notIn?: number;
}
