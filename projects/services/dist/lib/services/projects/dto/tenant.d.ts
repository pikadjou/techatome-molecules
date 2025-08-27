import { GraphSchema } from '@ta/server';
export interface Tenant {
    id: string;
    tenantName: string;
    projectId: number;
    tenantId?: number;
    customerId?: number;
}
export declare const tenantProps: GraphSchema<Tenant>;
