import { EventEmitter } from '@angular/core';
import { CamIconType } from '@ta/icons';
import { FileData } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class FileCardComponent {
    file: FileData;
    fileSelected: EventEmitter<FileData>;
    moreInformationSelected: EventEmitter<FileData>;
    get localIcon(): CamIconType.Doc | CamIconType.Excel | CamIconType.Image | CamIconType.Pdf | CamIconType.UnknownFile;
    get fileType(): string | null;
    get userTrigram(): string | null;
    get fileSize(): number | null;
    get fileName(): string | null;
    onHeaderClicked(): void;
    onBodyClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileCardComponent, "ta-file-card", never, { "file": { "alias": "file"; "required": false; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; }, never, never, true, never>;
}
