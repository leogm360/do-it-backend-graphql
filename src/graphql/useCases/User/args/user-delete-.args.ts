import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserInclude, UserSelect, UserWhereUniqueInput } from '../inputs';

@ArgsType()
export class UserDeleteArgs implements Prisma.UserDeleteArgs {
  include?: UserInclude;
  select?: UserSelect;
  where: UserWhereUniqueInput;
}
