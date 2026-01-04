import { EventEmitter, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FilterContainerComponent extends TaBaseComponent implements OnInit {
    form: import("@angular/core").InputSignal<InputBase<any>[]>;
    filtersSelected: EventEmitter<any>;
    isFilterOpen: boolean;
    askValidation$: Subject<null>;
    askClear$: Subject<null>;
    constructor();
    ngOnInit(): void;
    apply(data: any): void;
    clear(): void;
    validate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterContainerComponent, "ta-filter-container", never, { "form": { "alias": "form"; "required": false; "isSignal": true; }; }, { "filtersSelected": "filtersSelected"; }, never, never, true, never>;
}
