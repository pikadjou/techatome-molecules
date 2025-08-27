import { TemplateRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CamBaseModal } from '@ta/utils';
import { Observable } from 'rxjs';
import { ModalStyle } from '../layout-modal.component';
import * as i0 from "@angular/core";
export interface TemplateModalContainerData {
    template: TemplateRef<any>;
    askClosing$?: Observable<null>;
    style?: ModalStyle;
}
export declare class TemplateModalContainer extends CamBaseModal {
    data: TemplateModalContainerData;
    dialogRef: MatDialogRef<any>;
    get style(): ModalStyle;
    constructor(data: TemplateModalContainerData, dialogRef: MatDialogRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateModalContainer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TemplateModalContainer, "ng-component", never, {}, {}, never, never, true, never>;
}
