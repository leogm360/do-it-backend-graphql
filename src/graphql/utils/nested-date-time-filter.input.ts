import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class NestedDateTimeFilter implements Prisma.NestedDateTimeFilter {
  equals?: Date;
  gt?: Date;
  gte?: Date;
  in?: Date[];
  lt?: Date;
  lte?: Date;
  not?: NestedDateTimeFilter;
  notIn?: Date[];
}
