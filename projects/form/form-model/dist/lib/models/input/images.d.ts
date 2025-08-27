import { Picture } from '@ta/services';
import { FileData, FileStructure } from '@ta/utils';
import { Observable } from 'rxjs';
import { IInputBase, InputBase } from './base';
export interface IInputImages extends IInputBase<string[]> {
    files$?: Observable<FileData[]>;
    update?: (data: FileStructure[]) => Promise<Picture[]>;
    onFileDeleted?: (FileData: FileData) => void;
    removeFile$?: Observable<FileData>;
}
export declare class InputImages extends InputBase<string[]> {
    files$: Observable<FileData[]> | null;
    update: ((data: FileStructure[]) => Promise<Picture[]>) | null;
    fileDeleted?: (FileData: FileData) => void;
    removeFile$: Observable<FileData> | null;
    constructor(options?: IInputImages);
}
