import { EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FiltersFormComponent extends TaBaseComponent {
    form: import("@angular/core").InputSignal<InputBase<any>[]>;
    askValidation$: import("@angular/core").InputSignal<Observable<null>>;
    filtersSelected: EventEmitter<any>;
    constructor();
    apply(data: any): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersFormComponent, "ta-filters-form", never, { "form": { "alias": "form"; "required": false; "isSignal": true; }; "askValidation$": { "alias": "askValidation$"; "required": true; "isSignal": true; }; }, { "filtersSelected": "filtersSelected"; }, never, never, true, never>;
}
