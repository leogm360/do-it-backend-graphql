import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { QueryMode } from '@graphql/enums';

@InputType()
export class NestedStringFilter implements Prisma.NestedStringFilter {
  contains?: string;
  endsWith?: string;
  equals?: string;
  gt?: string;
  gte?: string;
  in?: string[];
  lt?: string;
  lte?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
  notIn?: string[];
  startsWith?: string;
}
