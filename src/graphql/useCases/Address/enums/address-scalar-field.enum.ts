import { registerEnumType } from '@nestjs/graphql';

export enum AddressScalarFieldEnum {
  id = 'id',
  street = 'street',
  number = 'number',
  city = 'city',
  state = 'state',
  zipCode = 'zipCode',
  userId = 'userId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(AddressScalarFieldEnum, {
  name: 'AddressScalarFieldEnum',
});
