import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileData, TaBaseModal, TemporaryFile } from '@ta/utils';
import { DialogData } from '../input-images.component';
import * as i0 from "@angular/core";
export declare class InputImageModal extends TaBaseModal implements OnInit {
    dialogRef: MatDialogRef<InputImageModal>;
    data: DialogData;
    selection: string[];
    tempFiles: TemporaryFile;
    constructor(dialogRef: MatDialogRef<InputImageModal>, data: DialogData);
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
    }[]> | undefined;
    onFileSelected(file: FileData): void;
    uploadPics: () => Promise<void>;
    selected: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputImageModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputImageModal, "ng-component", never, {}, {}, never, never, true, never>;
}
