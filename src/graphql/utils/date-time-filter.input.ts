import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NestedDateTimeFilter } from './nested-date-time-filter.input';

@InputType()
export class DateTimeFilter implements Prisma.DateTimeFilter {
  equals?: Date;
  gt?: Date;
  gte?: Date;
  in?: Date[];
  lt?: Date;
  lte?: Date;
  not?: NestedDateTimeFilter;
  notIn?: Date[];
}
