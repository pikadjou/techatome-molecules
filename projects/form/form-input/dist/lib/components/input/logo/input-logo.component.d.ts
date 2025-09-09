import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputLogo } from '@ta/form-model';
import { FileData } from '@ta/utils';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class InputLogoComponent extends TaAbstractInputComponent<InputLogo> implements OnInit {
    dialog: MatDialog;
    get selection(): string | null;
    get fileDataSelection(): FileData | null;
    get hasLogo(): boolean;
    set selection(value: string | null);
    constructor(dialog: MatDialog);
    ngOnInit(): void;
    openDialog(): Promise<void>;
    onFileDeleted(fileData: FileData): void;
    removeLogo(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLogoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLogoComponent, "ta-input-logo", never, {}, {}, never, never, true, never>;
}
export interface LogoDialogData {
    input: InputLogo;
    selection: string | null;
}
