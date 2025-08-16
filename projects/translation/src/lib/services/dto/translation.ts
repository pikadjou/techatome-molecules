import { BaseStrapi, GraphSchema, GraphStrapiResponse, baseStrapiProps } from '@ta/server';

import { Feature } from './feature';

export interface Translation extends BaseStrapi {
  key: string;
  feature: GraphStrapiResponse<Feature>;
  partner: string;
  value: string;
}
const props: (keyof Translation)[] = ['key', 'feature', 'partner', 'value'];

export const translationProps = new GraphSchema<Translation>(props.concat(baseStrapiProps));
