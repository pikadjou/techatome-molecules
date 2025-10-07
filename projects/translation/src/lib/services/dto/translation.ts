import { BaseStrapi, GraphSchema, baseStrapiProps } from '@ta/server';

import { Feature } from './feature';

export interface Translation extends BaseStrapi {
  key: string;
  feature: Feature;
  value: string;
}
const props: (keyof Translation)[] = ['key', 'feature', 'value'];

export const translationProps = new GraphSchema<Translation>(props.concat(baseStrapiProps));
