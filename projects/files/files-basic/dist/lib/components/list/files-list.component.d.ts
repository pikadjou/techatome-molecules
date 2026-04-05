import { FileData, FileType, TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FileListComponent extends TaBaseComponent {
    files: import("@angular/core").InputSignal<FileData<any>[]>;
    canDeleteFile: import("@angular/core").InputSignal<boolean>;
    fileSelected: import("@angular/core").OutputEmitterRef<FileData<any> & {
        index: number;
    }>;
    moreInformationSelected: import("@angular/core").OutputEmitterRef<FileData<any>>;
    fileDeleted: import("@angular/core").OutputEmitterRef<FileData<any>>;
    constructor();
    canDisplayFileType(fileType: FileType): boolean;
    onFileSelected(file: FileData, index: number): void;
    onMoreInformationSelected(file: FileData): void;
    deleteFile(fileData: FileData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileListComponent, "ta-files-list", never, { "files": { "alias": "files"; "required": false; "isSignal": true; }; "canDeleteFile": { "alias": "canDeleteFile"; "required": false; "isSignal": true; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; "fileDeleted": "fileDeleted"; }, never, never, true, never>;
}
