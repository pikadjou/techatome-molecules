import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { InputUpload } from '@ta/form-model';
import { DocumentDto } from '@ta/services';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
type InProgressFile = {
    name: string;
    progress: number;
    completed: DocumentDto | null;
};
export declare class UploadComponent extends CamAbstractInputComponent<InputUpload> implements OnInit {
    uploadStatusChanged: EventEmitter<boolean>;
    fileDropEl: ElementRef;
    private readonly _documentsService;
    private _invervalId;
    inProgressFiles: InProgressFile[];
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    onFileDropped($event: any): void;
    fileBrowseHandler(files: any): void;
    openDocument(doc: DocumentDto): void;
    isValidDocumentList(): boolean;
    validation(): void;
    deleteInProgressFile(name: string): void;
    deleteFile(id: string): void;
    prepareFilesList(files: File[]): void;
    uploadFile(): Promise<void>;
    private _refreshUploadStatus;
    private _localToFile;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadComponent, "ta-input-upload", never, {}, { "uploadStatusChanged": "uploadStatusChanged"; }, never, never, true, never>;
}
export {};
