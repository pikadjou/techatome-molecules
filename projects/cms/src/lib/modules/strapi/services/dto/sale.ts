import { BaseStrapi, GraphSchema, baseStrapiProps } from '@ta/server';

import { RichText } from './types/rich-text';

export interface Sale extends BaseStrapi {
  Content: RichText;
}
const props: (keyof Sale)[] = ['Content'];

export const saleProps = new GraphSchema<Sale>(props.concat(baseStrapiProps));
