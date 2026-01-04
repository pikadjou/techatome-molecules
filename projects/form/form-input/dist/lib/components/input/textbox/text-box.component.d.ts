import { OnInit } from '@angular/core';
import { InputTextBox } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class TextBoxComponent extends TaAbstractInputComponent<InputTextBox, string> implements OnInit {
    space: import("@angular/core").InputSignal<boolean>;
    hide: boolean;
    get isPassword(): boolean;
    constructor();
    ngOnInit(): void;
    iconClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextBoxComponent, "ta-input-textbox", never, { "space": { "alias": "space"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
