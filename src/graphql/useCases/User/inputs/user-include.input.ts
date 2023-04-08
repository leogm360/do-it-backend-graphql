import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCountOutputTypeArgs } from '../inputs';

@InputType()
export class UserInclude implements Prisma.UserInclude {
  _count?: UserCountOutputTypeArgs;
}
