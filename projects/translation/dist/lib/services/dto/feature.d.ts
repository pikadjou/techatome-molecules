import { BaseStrapi, GraphSchema } from "@ta/server";
export interface Feature extends BaseStrapi {
    key: string;
}
export declare const featureProps: GraphSchema<Feature>;
