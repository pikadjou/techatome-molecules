import { EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { InputNumber, InputTextBox } from "@ta/form-model";
import { TaSizes } from "@ta/styles";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class SearchFieldComponent extends TaAbstractInputComponent<InputTextBox | InputNumber> implements OnInit, OnDestroy {
    isOpen: import("@angular/core").InputSignal<boolean>;
    placeholder: import("@angular/core").InputSignal<string>;
    space: import("@angular/core").InputSignal<boolean>;
    type: import("@angular/core").InputSignal<TaSizes>;
    valueCompleted: EventEmitter<any>;
    isDeployed: boolean;
    focusTextBox: boolean;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
    iconClicked(): void;
    focus(): void;
    focusOut(): void;
    keyPress: (event: KeyboardEvent) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchFieldComponent, "ta-search-field", never, { "isOpen": { "alias": "isOpen"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "space": { "alias": "space"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; }, { "valueCompleted": "valueCompleted"; }, never, never, true, never>;
}
