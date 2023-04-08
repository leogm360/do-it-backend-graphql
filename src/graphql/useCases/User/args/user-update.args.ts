import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  UserUpdateInput,
  UserInclude,
  UserSelect,
  UserWhereUniqueInput,
} from '../inputs';

@ArgsType()
export class UserUpdateArgs implements Prisma.UserUpdateArgs {
  data: UserUpdateInput;
  include?: UserInclude;
  select?: UserSelect;
  where: UserWhereUniqueInput;
}
