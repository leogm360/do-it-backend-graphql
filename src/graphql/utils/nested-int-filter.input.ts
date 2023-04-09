import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class NestedIntFilter implements Prisma.NestedIntFilter {
  equals?: number;
  gt?: number;
  gte?: number;
  in?: number;
  lt?: number;
  lte?: number;
  not?: NestedIntFilter;
  notIn?: number;
}
