import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserScalarFieldEnum } from '../enums';
import {
  UserWhereUniqueInput,
  UserInclude,
  UserOrderByWithRelationInput,
  UserSelect,
  UserWhereInput,
} from '../inputs';

@ArgsType()
export class UserFindManyArgs implements Prisma.UserFindManyArgs {
  cursor?: UserWhereUniqueInput;
  distinct?: UserScalarFieldEnum;
  include?: UserInclude;
  orderBy?: UserOrderByWithRelationInput;
  select?: UserSelect;
  @Field(() => Int)
  skip?: number;
  @Field(() => Int)
  take?: number;
  where?: UserWhereInput;
}
