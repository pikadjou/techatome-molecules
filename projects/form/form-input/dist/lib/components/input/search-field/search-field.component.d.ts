import { EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { InputNumber, InputTextBox } from "@ta/form-model";
import { TaSizes } from "@ta/styles";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class SearchFieldComponent extends TaAbstractInputComponent<InputTextBox | InputNumber> implements OnInit, OnDestroy {
    isOpen: boolean;
    placeholder: string;
    space: boolean;
    type: TaSizes;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchFieldComponent, "ta-search-field", never, { "isOpen": { "alias": "isOpen"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "space": { "alias": "space"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, { "valueCompleted": "valueCompleted"; }, never, never, true, never>;
}
