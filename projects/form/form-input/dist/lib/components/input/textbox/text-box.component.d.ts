import { OnInit } from '@angular/core';
import { InputTextBox } from '@ta/form-model';
import { TaAbstractInputComponent } from '../../abstract.component';
import * as i0 from "@angular/core";
export declare class TextBoxComponent extends TaAbstractInputComponent<InputTextBox, string> implements OnInit {
    space: boolean;
    hide: boolean;
    get isPassword(): boolean;
    constructor();
    ngOnInit(): void;
    iconClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextBoxComponent, "ta-input-textbox", never, { "space": { "alias": "space"; "required": false; }; }, {}, never, never, true, never>;
}
