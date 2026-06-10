import { InputTextBox } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridSearchComponent extends TaAbstractGridComponent<any> {
    placeholder: import("@angular/core").InputSignal<string>;
    searchInput: InputTextBox<string>;
    valueChanged(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridSearchComponent, "ta-grid-search", never, { "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
