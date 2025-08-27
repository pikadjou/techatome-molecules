import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export type ModalStyle = 'full' | 'big' | 'classic' | 'small';
export declare class LayoutModalComponent extends TaBaseComponent implements OnInit {
    dialogRef: MatDialogRef<any>;
    style: ModalStyle;
    title: string;
    constructor(dialogRef: MatDialogRef<any>);
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutModalComponent, "ta-layout-modal", never, { "style": { "alias": "style"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, {}, never, ["*"], true, never>;
}
