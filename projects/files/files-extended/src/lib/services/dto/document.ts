import { FileMetadata } from './file-metadata';

export interface Document {
  id: number;
  url: string;
  isOwner: boolean;
  fileMetadata: FileMetadata;
}
