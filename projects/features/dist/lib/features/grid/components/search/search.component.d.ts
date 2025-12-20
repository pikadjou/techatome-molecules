import { InputTextBox } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridSearchComponent extends TaAbstractGridComponent<any> {
    outOfBox: boolean;
    input: InputTextBox<string>;
    private _session;
    constructor();
    valueChanged(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridSearchComponent, "ta-grid-search", never, { "outOfBox": { "alias": "outOfBox"; "required": false; }; }, {}, never, never, true, never>;
}
