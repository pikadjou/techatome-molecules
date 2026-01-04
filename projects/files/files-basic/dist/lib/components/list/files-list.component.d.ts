import { EventEmitter } from "@angular/core";
import { FileData, FileType, TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FileListComponent extends TaBaseComponent {
    files: import("@angular/core").InputSignal<FileData<any>[]>;
    canDeleteFile: import("@angular/core").InputSignal<boolean>;
    fileSelected: EventEmitter<FileData<any> & {
        index: number;
    }>;
    moreInformationSelected: EventEmitter<FileData>;
    fileDeleted: EventEmitter<FileData<any>>;
    constructor();
    canDisplayFileType(fileType: FileType): boolean;
    onFileSelected(file: FileData, index: number): void;
    onMoreInformationSelected(file: FileData): void;
    deleteFile(fileData: FileData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileListComponent, "ta-files-list", never, { "files": { "alias": "files"; "required": false; "isSignal": true; }; "canDeleteFile": { "alias": "canDeleteFile"; "required": false; "isSignal": true; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; "fileDeleted": "fileDeleted"; }, never, never, true, never>;
}
