import { EventEmitter } from "@angular/core";
import { ActionButtonData } from "@ta/ui";
import { FileStructure } from "@ta/utils";
import * as i0 from "@angular/core";
export type Feature = "take-pic" | "upload-pic" | "upload-file";
export declare class UploadComponent {
    features: Feature[];
    canSelectMultipleFiles: boolean;
    showInActionButton: boolean;
    filesPicked: EventEmitter<FileStructure[]>;
    get addActions(): ActionButtonData[];
    private _haveFeature;
    private _takePic;
    private _uploadPic;
    private _uploadFile;
    private _localToFile;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadComponent, "ta-files-upload", never, { "features": { "alias": "features"; "required": false; }; "canSelectMultipleFiles": { "alias": "canSelectMultipleFiles"; "required": false; }; "showInActionButton": { "alias": "showInActionButton"; "required": false; }; }, { "filesPicked": "filesPicked"; }, never, never, true, never>;
}
