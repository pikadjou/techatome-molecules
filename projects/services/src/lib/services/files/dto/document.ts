import { GraphSchema } from '@camelot/server';

import { FileType } from './file-type';

export interface DocumentDto {
  id: string;
  name?: string;
  url: string;
  fileType: FileType;
  size: number;
  description?: string;
  uploadedDate: string;
  tenantId: number;
  tenantName: string;
  tenantDocumentId: number;
  projectId?: string;
  project?: { id: string; name: string };
}

export const documentProps = new GraphSchema<DocumentDto>([
  'id',
  'name',
  'url',
  'fileType',
  'size',
  'description',
  'uploadedDate',
  'tenantId',
  'tenantName',
  'tenantDocumentId',
  'projectId',
]);
