import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCreateInput, UserInclude, UserSelect } from '../inputs';

@ArgsType()
export class UserCreateArgs implements Prisma.UserCreateArgs {
  data: UserCreateInput;
  include?: UserInclude;
  select?: UserSelect;
}
