import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  StringFieldUpdateOperationsInput,
  IntFieldUpdateOperationsInput,
  EnumBrazileanStatesFieldUpdateOperationsInput,
  DateTimeFieldUpdateOperationsInput,
} from '@graphql/utils';

@InputType()
export class AddressUpdateInput implements Prisma.AddressUpdateInput {
  id?: StringFieldUpdateOperationsInput;
  street?: StringFieldUpdateOperationsInput;
  number?: IntFieldUpdateOperationsInput;
  city?: StringFieldUpdateOperationsInput;
  state?: EnumBrazileanStatesFieldUpdateOperationsInput;
  zipCode?: StringFieldUpdateOperationsInput;
  createdAt?: DateTimeFieldUpdateOperationsInput;
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
