import { GraphSchema } from '@ta/server';
export interface DocumentDto {
    createdDate?: string;
    description: string;
    id: string;
    url: string;
    size: number;
}
export declare const documentProps: GraphSchema<DocumentDto>;
