import { EventEmitter } from '@angular/core';
import { TaBaseComponent, FileData, FileType } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class FileListComponent extends TaBaseComponent {
    files: FileData[];
    canDeleteFile: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<FileListComponent, "ta-files-list", never, { "files": { "alias": "files"; "required": false; }; "canDeleteFile": { "alias": "canDeleteFile"; "required": false; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; "fileDeleted": "fileDeleted"; }, never, never, true, never>;
}
