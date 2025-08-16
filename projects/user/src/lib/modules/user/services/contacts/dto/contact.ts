import { GraphSchema } from '@camelot/server';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  mail: string;
  tenantPersonId: number;
}

const props: (keyof Contact)[] = [
  'id',
  'firstName',
  'lastName',
  'mail',
  'phoneNumber',
  'tenantPersonId',
];

export const contactProps = new GraphSchema<Contact>(props);
