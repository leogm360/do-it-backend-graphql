import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from './user-create.input';

@InputType()
export class UserCreateWithoutAddressInput
  extends UserCreateInput
  implements Prisma.UserCreateWithoutAddressInput {}
