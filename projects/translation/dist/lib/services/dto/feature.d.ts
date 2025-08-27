import { BaseStrapi, GraphSchema } from '@ta/server';
export interface Feature extends BaseStrapi {
    name: string;
}
export declare const featureProps: GraphSchema<Feature>;
