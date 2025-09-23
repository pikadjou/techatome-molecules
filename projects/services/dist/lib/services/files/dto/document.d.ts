import { GraphSchema } from '@ta/server';
export interface DocumentDto {
    createdDate?: string;
    description: string;
    id: string;
    mediaType?: any;
    url: string;
}
export declare const documentProps: GraphSchema<DocumentDto>;
