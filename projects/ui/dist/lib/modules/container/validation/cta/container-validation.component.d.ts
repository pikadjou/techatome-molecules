import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class ContainerValidationComponent extends TaBaseComponent {
    dialog: MatDialog;
    disabled: boolean;
    validated: EventEmitter<any>;
    constructor(dialog: MatDialog);
    openModal(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContainerValidationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ContainerValidationComponent, "ta-container-validation", never, { "disabled": { "alias": "disabled"; "required": false; }; }, { "validated": "validated"; }, never, ["*"], true, never>;
}
