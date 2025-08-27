import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InputComponent } from '@ta/form-model';
import { CamBaseModal } from '@ta/utils';
import { Subject } from 'rxjs';
import { CamAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class ComponentInputComponent extends CamAbstractInputComponent<InputComponent> {
    readonly dialog: MatDialog;
    open(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComponentInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComponentInputComponent, "ta-input-component", never, {}, {}, never, never, true, never>;
}
type TemplateModalData = {
    input: InputComponent;
};
export declare class TemplateModal extends CamBaseModal {
    readonly dialogRef: MatDialogRef<any, any>;
    readonly data: TemplateModalData;
    readonly selectedValue$: Subject<string>;
    constructor();
    select(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateModal, "ng-component", never, {}, {}, never, never, true, never>;
}
export {};
