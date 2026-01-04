import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { Menu } from "@ta/menu";
import { FileData, FileStructure, FileType, TaBaseComponent } from "@ta/utils";
import { Feature } from "../upload/files-upload.component";
import * as i0 from "@angular/core";
export declare class FilesDisplayComponent extends TaBaseComponent {
    files$: import("@angular/core").InputSignal<Observable<FileData<any>[]>>;
    menu: import("@angular/core").InputSignal<Menu<import("@ta/menu").MenuBase>>;
    canAddFile: import("@angular/core").InputSignal<boolean>;
    tempFiles: import("@angular/core").InputSignal<FileData<any>[]>;
    fileType: import("@angular/core").InputSignal<FileType>;
    fileSelected: EventEmitter<FileData & {
        index: number;
    }>;
    moreInformationSelected: EventEmitter<FileData>;
    fileUploading: EventEmitter<FileStructure[]>;
    get canSelectMultipleFiles(): boolean;
    get canDisplayTempsFiles(): boolean;
    getFeature(): Feature[];
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilesDisplayComponent, "ta-files-display", never, { "files$": { "alias": "files$"; "required": true; "isSignal": true; }; "menu": { "alias": "menu"; "required": true; "isSignal": true; }; "canAddFile": { "alias": "canAddFile"; "required": false; "isSignal": true; }; "tempFiles": { "alias": "tempFiles"; "required": true; "isSignal": true; }; "fileType": { "alias": "fileType"; "required": true; "isSignal": true; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; "fileUploading": "fileUploading"; }, never, never, true, never>;
}
