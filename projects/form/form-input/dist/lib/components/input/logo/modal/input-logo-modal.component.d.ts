import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileData, TaBaseModal, TemporaryFile } from '@ta/utils';
import { LogoDialogData } from '../input-logo.component';
import * as i0 from "@angular/core";
export declare class InputLogoModal extends TaBaseModal implements OnInit {
    dialogRef: MatDialogRef<InputLogoModal>;
    data: LogoDialogData;
    selection: string | null;
    tempFiles: TemporaryFile;
    constructor(dialogRef: MatDialogRef<InputLogoModal>, data: LogoDialogData);
    ngOnInit(): void;
    getPics$(): import("rxjs").Observable<{
        isSelected: boolean;
        id: number;
        url: string;
        thumbnailUrl?: string | undefined;
        type: import("@ta/utils").FileType;
        fileExtension?: import("@ta/utils").EFileExtension | undefined;
        name?: string | undefined;
        fileMetaData?: any;
        isLoading?: boolean | undefined;
    }> | undefined;
    onFileSelected(file: FileData): void;
    uploadPics: () => Promise<void>;
    selected: () => void;
    cancel: () => void;
    clearSelection: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLogoModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLogoModal, "ng-component", never, {}, {}, never, never, true, never>;
}
