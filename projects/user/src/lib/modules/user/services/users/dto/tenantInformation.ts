import { GraphSchema } from '@ta/server';

export interface TenantInformation {
  id: string;
  tenantId: number;
  tenantName: string;
  customerId: number;
}

export const tenantInformationsProps = new GraphSchema<TenantInformation>(['customerId', 'tenantId', 'tenantName']);
