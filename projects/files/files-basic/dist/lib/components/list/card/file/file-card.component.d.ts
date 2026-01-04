import { EventEmitter } from "@angular/core";
import { TaIconType } from "@ta/icons";
import { FileData } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FileCardComponent {
    file: import("@angular/core").InputSignal<FileData<any>>;
    fileSelected: EventEmitter<FileData>;
    moreInformationSelected: EventEmitter<FileData>;
    get localIcon(): TaIconType.Doc | TaIconType.Excel | TaIconType.Image | TaIconType.Pdf | TaIconType.UnknownFile;
    get fileType(): string | null;
    get userTrigram(): string | null;
    get fileSize(): number | null;
    get fileName(): string | null;
    onHeaderClicked(): void;
    onBodyClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileCardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileCardComponent, "ta-file-card", never, { "file": { "alias": "file"; "required": true; "isSignal": true; }; }, { "fileSelected": "fileSelected"; "moreInformationSelected": "moreInformationSelected"; }, never, never, true, never>;
}
