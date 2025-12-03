import { GraphSchema } from '@ta/server';

export interface DocumentDto {
  createdDate?: string;
  description: string;
  id: string;
  url: string;
  size: number;
}

export const documentProps = new GraphSchema<DocumentDto>(['id', 'url', 'description', 'createdDate', 'size']);
