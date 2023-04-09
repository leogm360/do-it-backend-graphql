import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import {
  UserCreateOrConnectWithoutAddressInput,
  UserCreateWithoutAddressInput,
} from '@graphql/useCases';

@InputType()
export class UserCreateNestedOneWithoutAddressInput
  implements Prisma.UserCreateNestedOneWithoutAddressInput
{
  connect?: UserWhereUniqueInput;
  connectOrCreate?: UserCreateOrConnectWithoutAddressInput;
  create?: UserCreateWithoutAddressInput;
}
