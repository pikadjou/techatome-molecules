import { BaseStrapi, GraphSchema } from '@ta/server';
import { RichText } from './types/rich-text';
export interface Sale extends BaseStrapi {
    Content: RichText;
}
export declare const saleProps: GraphSchema<Sale>;
