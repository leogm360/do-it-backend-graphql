import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from './user-create.input';

@InputType()
export class UserUpdateInput
  extends PartialType(UserCreateInput)
  implements Prisma.UserUpdateInput {}
