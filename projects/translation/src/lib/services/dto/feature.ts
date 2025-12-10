import { BaseStrapi, GraphSchema, baseStrapiProps } from "@ta/server";

export interface Feature extends BaseStrapi {
  key: string;
}
const props: (keyof Feature)[] = ["key"];

export const featureProps = new GraphSchema<Feature>(
  props.concat(baseStrapiProps)
);
