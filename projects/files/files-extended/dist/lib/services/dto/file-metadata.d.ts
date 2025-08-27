import { TranslatedEnumeration, User } from '@ta/services';
export interface FileMetadata {
    creationDate: string;
    owner: User | null;
    fileSize: number;
    fileType: TranslatedEnumeration;
    description: string;
    fileName: string;
}
