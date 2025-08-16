import { Culture } from '@camelot/utils';

import { Function } from './function';
import { TenantInformation } from './tenantInformation';

export interface CurrentUser {
  id: string;
  // ceci est le mail
  userName: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isCompany: boolean;
  culture: Culture;
  trigram: string;
  picture: string;
  functions: Function[];
  tenantInformations: TenantInformation[];
}
