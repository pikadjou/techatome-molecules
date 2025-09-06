import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UploadDocumentFormService } from '@ta/files-extended';
import { IInputsError, InputBase } from '@ta/form-model';
import { TaEnumerationService, TranslatedEnumeration } from '@ta/services';
import * as i0 from "@angular/core";
export interface UploadDocumentResult {
    description?: string;
    documentTypeId: number;
}
export declare class UploadDocumentModal implements OnInit {
    private _enumTypeService;
    dialogRef: MatDialogRef<UploadDocumentModal, UploadDocumentResult | null>;
    private _form;
    form: InputBase<any>[];
    error: IInputsError;
    loader: boolean;
    get fileTypes$(): Observable<TranslatedEnumeration[]>;
    constructor(_enumTypeService: TaEnumerationService, dialogRef: MatDialogRef<UploadDocumentModal, UploadDocumentResult | null>, _form: UploadDocumentFormService);
    ngOnInit(): void;
    onSaveClick: (values: {
        description: string;
        documentType: string;
    }) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadDocumentModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadDocumentModal, "ta-upload-document", never, {}, {}, never, never, true, never>;
}
