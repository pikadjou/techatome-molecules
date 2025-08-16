import { GraphSchema } from '@camelot/server';

export interface Address {
  id: string;
  country: string;
  city: string;
  postCode: number;
  street: string;
}

export const addressProps = new GraphSchema<Address>([
  'id',
  'country',
  'city',
  'postCode',
  'street',
]);
