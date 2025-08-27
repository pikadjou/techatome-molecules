import { GraphSchema } from '@ta/server';
export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    mail: string;
    tenantPersonId: number;
}
export declare const contactProps: GraphSchema<Contact>;
