import { GraphSchema } from '@ta/server';
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
    project?: {
        id: string;
        name: string;
    };
}
export declare const documentProps: GraphSchema<DocumentDto>;
