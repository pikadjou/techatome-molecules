import { BaseStrapi, GraphSchema, baseStrapiProps } from '@camelot/server';

import { RichText } from './types/rich-text';

export interface Cms extends BaseStrapi {
  Title: string;
  Description: RichText;
  Tenant: 'default' | 'reno-energy';
  Type: string;
}
const props: (keyof Cms)[] = ['Title', 'Description', 'Tenant', 'Type'];

export const cmsProps = new GraphSchema<Cms>(props.concat(baseStrapiProps));
