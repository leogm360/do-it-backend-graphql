import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UserCountOutputTypeSelect
  implements Prisma.UserCountOutputTypeSelect
{
  todos?: boolean;
}
