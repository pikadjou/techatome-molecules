import { GraphSchema } from '@camelot/server';

import { CurrentUser } from './currentUser';

export interface User extends CurrentUser {}

export interface UserFunctionPayload {
  userId: string;
  functionId: string;
}

export const userProps = new GraphSchema<User>([
  'id',
  'userName',
  'firstName',
  'lastName',
  'phoneNumber',
  'isCompany',
  'culture',
  'trigram',
  'picture',
  'tenantInformations',
  'functions',
]);
