import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAddressInput } from './user-create-without-address.input';

@InputType()
export class UserCreateOrConnectWithoutAddressInput
  implements Prisma.UserCreateOrConnectWithoutAddressInput
{
  create: UserCreateWithoutAddressInput;
  where: UserWhereUniqueInput;
}
