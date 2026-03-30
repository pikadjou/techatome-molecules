import { InputTextBox } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridSearchComponent extends TaAbstractGridComponent<any> {
    outOfBox: import("@angular/core").InputSignal<boolean>;
    placeholder: import("@angular/core").InputSignal<string>;
    searchInput: InputTextBox<string>;
    private _session;
    valueChanged(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridSearchComponent, "ta-grid-search", never, { "outOfBox": { "alias": "outOfBox"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
