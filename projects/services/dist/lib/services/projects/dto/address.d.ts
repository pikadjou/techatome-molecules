import { GraphSchema } from '@ta/server';
export interface Address {
    id: string;
    country: string;
    city: string;
    postCode: number;
    street: string;
}
export declare const addressProps: GraphSchema<Address>;
