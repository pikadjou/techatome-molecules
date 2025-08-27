import { MatDialogRef } from '@angular/material/dialog';
import { ModalParameter } from '../common-modal';
import * as i0 from "@angular/core";
export declare class ValidationModal {
    dialogRef: MatDialogRef<ValidationModal>;
    data?: ModalParameter | undefined;
    get title(): string;
    get subtitle(): string;
    constructor(dialogRef: MatDialogRef<ValidationModal>, data?: ModalParameter | undefined);
    onNoClick(): void;
    onYesClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValidationModal, "ng-component", never, {}, {}, never, never, true, never>;
}
