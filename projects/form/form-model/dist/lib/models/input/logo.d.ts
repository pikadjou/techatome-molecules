import { Picture } from "@ta/services";
import { FileData, FileStructure } from "@ta/utils";
import { Observable } from "rxjs";
import { IInputBase, InputBase } from "./base";
export interface IInputLogo extends IInputBase<string> {
    availableFile$?: Observable<FileData>;
    update?: (data: FileStructure) => Promise<Picture>;
    onFileDeleted?: (FileData: FileData) => void;
    removeFile$?: Observable<FileData>;
}
export declare class InputLogo extends InputBase<string> {
    availableFile$: Observable<FileData> | null;
    update: ((data: FileStructure) => Promise<Picture>) | null;
    fileDeleted?: (FileData: FileData) => void;
    removeFile$: Observable<FileData> | null;
    constructor(options?: IInputLogo);
}
