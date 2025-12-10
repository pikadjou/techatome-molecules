import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Menu } from "@ta/menu";
import { FileData, FileStructure, FileType, TaBaseComponent } from "@ta/utils";
import { Feature } from "../upload/files-upload.component";
import * as i0 from "@angular/core";
export declare class FilesDisplayComponent extends TaBaseComponent {
    files$: Observable<FileData[]>;
    menu: Menu;
    canAddFile: boolean;
    tempFiles: FileData[];
    fileType: FileType;
    fileSelected: EventEmitter<FileData & {
        index: number;
    }>;
    moreInformationSelected: EventEmitter<FileData>;
    fileUploading: EventEmitter<FileStructure[]>;
    get canSelectMultipleFiles(): boolean;
    get canDisplayTempsFiles(): boolean;
    getFeature(): Feature[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilesDisplayComponent, "ta-files-display", never, { "files$": { "alias": "files$"; "required": false; }; "menu": { "alias": "menu"; "required": false; }; "canAddFile": { "alias": "canAddFile"; "required": false; }; "tempFiles": { "alias": "tempFiles"; "required": false; }; "fileType": { "alias": "fileType"; "required": false; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; "fileUploading": "fileUploading"; }, never, never, true, never>;
}
