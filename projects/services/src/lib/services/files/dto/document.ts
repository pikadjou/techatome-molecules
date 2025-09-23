import { GraphSchema } from '@ta/server';

export interface DocumentDto {
  createdDate?: string;
  description: string;
  id: string;
  mediaType?: any;
  url: string;
}

export const documentProps = new GraphSchema<DocumentDto>(['id', 'url', 'description', 'mediaType', 'createdDate']);
