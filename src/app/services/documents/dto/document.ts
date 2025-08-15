import { BaseStrapi, baseStrapiProps, GraphSchema } from '@ta/server';

import { Category } from '../../categories/dto/category';
import { Agreement } from '../../agreements/dto/agreement';

export interface Document extends BaseStrapi {
  title: string;
  content: string;
  blockContent: any;
  category?: Category;
  agreements?: Agreement[];
}
const props: (keyof Document)[] = ['title', 'content', 'blockContent', 'category', 'agreements'];

export const documentProps = new GraphSchema<Document>(props.concat(baseStrapiProps));

export interface PostDocument extends Omit<Document, 'agreements'> {
  agreements: string[];
}
