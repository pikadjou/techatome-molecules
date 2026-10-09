import { InputBase } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridHighlightFiltersComponent extends TaAbstractGridComponent<unknown> {
    showResultCount: import("@angular/core").InputSignal<boolean>;
    showReset: import("@angular/core").InputSignal<boolean>;
    highlightForm: import("@angular/core").WritableSignal<InputBase<any>[]>;
    private _formService;
    /** Lu sur les critères du grid : ceux restaurés à l'ouverture comptent aussi. */
    hasActiveFilters(): boolean;
    ngOnInit(): void;
    applyFilters(data: any): void;
    reset(): void;
    private _setHighlightForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridHighlightFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridHighlightFiltersComponent, "ta-grid-highlight-filters", never, { "showResultCount": { "alias": "showResultCount"; "required": false; "isSignal": true; }; "showReset": { "alias": "showReset"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
