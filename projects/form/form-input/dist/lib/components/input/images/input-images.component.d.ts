import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputImages } from '@ta/form-model';
import { FileData } from '@ta/utils';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputImagesComponent extends CamAbstractInputComponent<InputImages> implements OnInit {
    dialog: MatDialog;
    get selection(): string[];
    get fileDataSelection(): FileData[];
    get isCircularButton(): boolean;
    set selection(value: string[]);
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): Promise<void>;
    onFileDeleted(fileData: FileData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputImagesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputImagesComponent, "ta-input-images", never, {}, {}, never, never, true, never>;
}
export interface DialogData {
    input: InputImages;
    selection: string[];
}
