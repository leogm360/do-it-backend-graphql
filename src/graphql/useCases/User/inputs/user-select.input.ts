import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCountOutputTypeArgs } from './user-count-output-type-args.input';

@InputType()
export class UserSelect implements Prisma.UserSelect {
  id?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  cpf?: boolean;
  cellphone?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
  @Field(() => UserCountOutputTypeArgs)
  _count?: UserCountOutputTypeArgs;
}
