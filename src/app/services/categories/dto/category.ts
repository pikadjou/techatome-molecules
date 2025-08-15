import { BaseStrapi, baseStrapiProps, GraphSchema } from '@ta/server';

export interface Category extends BaseStrapi {
  name: string;
  description: string;
  parent: Category | null;
}

const props: (keyof Category)[] = ['name', 'description', 'parent'];

export const categoryProps = new GraphSchema<Category>(props.concat(baseStrapiProps));
