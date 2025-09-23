import { OnInit } from '@angular/core';
import { InputImages } from '@ta/form-model';
import { DocumentDto } from '@ta/services';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputImagesComponent extends TaAbstractInputComponent<InputImages> implements OnInit {
    private _documentsService;
    constructor();
    openDialog(): Promise<void>;
    onFileDeleted(fileData: DocumentDto): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputImagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputImagesComponent, "ta-input-images", never, {}, {}, never, never, true, never>;
}
