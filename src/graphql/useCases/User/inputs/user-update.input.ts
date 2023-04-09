import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  StringFieldUpdateOperationsInput,
  DateTimeFieldUpdateOperationsInput,
} from '@graphql/utils';

@InputType()
export class UserUpdateInput implements Prisma.UserUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  firstName?: StringFieldUpdateOperationsInput;
  lastName?: StringFieldUpdateOperationsInput;
  cpf?: StringFieldUpdateOperationsInput;
  cellphone?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
