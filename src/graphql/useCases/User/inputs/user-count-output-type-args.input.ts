import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCountOutputTypeSelect } from './user-count-output-type-select.input';

@InputType()
export class UserCountOutputTypeArgs implements Prisma.UserCountOutputTypeArgs {
  select?: UserCountOutputTypeSelect;
}
