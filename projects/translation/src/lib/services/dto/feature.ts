import { BaseStrapi, GraphSchema, baseStrapiProps } from '@camelot/server';

export interface Feature extends BaseStrapi {
  name: string;
}
const props: (keyof Feature)[] = ['name'];

export const featureProps = new GraphSchema<Feature>(props.concat(baseStrapiProps));
