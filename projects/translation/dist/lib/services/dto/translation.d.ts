import { BaseStrapi, GraphSchema } from '@ta/server';
import { Feature } from './feature';
export interface Translation extends BaseStrapi {
    key: string;
    feature: Feature;
    value: string;
}
export declare const translationProps: GraphSchema<Translation>;
