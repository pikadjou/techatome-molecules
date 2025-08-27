import { BaseStrapi, GraphSchema } from '@ta/server';
import { RichText } from './types/rich-text';
export interface Cms extends BaseStrapi {
    Title: string;
    Description: RichText;
    Tenant: 'default' | 'reno-energy';
    Type: string;
}
export declare const cmsProps: GraphSchema<Cms>;
