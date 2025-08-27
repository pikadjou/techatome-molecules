import { BaseStrapi, GraphSchema, GraphStrapiResponse } from '@ta/server';
import { Feature } from './feature';
export interface Translation extends BaseStrapi {
    key: string;
    feature: GraphStrapiResponse<Feature>;
    partner: string;
    value: string;
}
export declare const translationProps: GraphSchema<Translation>;
