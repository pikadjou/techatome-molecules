import { GraphSchema } from '@ta/server';
export interface TenantInformation {
    id: string;
    tenantId: number;
    tenantName: string;
    customerId: number;
}
export declare const tenantInformationsProps: GraphSchema<TenantInformation>;
