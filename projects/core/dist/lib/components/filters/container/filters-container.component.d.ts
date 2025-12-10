import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import { ActiveFilterTag } from "../types";
import * as i0 from "@angular/core";
export declare class FiltersContainerComponent extends TaBaseComponent {
    form: InputBase<any>[];
    activeFilter: ActiveFilterTag[];
    filtersSelected: EventEmitter<any>;
    removedFilter: EventEmitter<ActiveFilterTag>;
    isFilterOpen: boolean;
    askValidation$: Subject<null>;
    constructor();
    toggleFilter(): void;
    apply(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersContainerComponent, "ta-filters-container", never, { "form": { "alias": "form"; "required": false; }; "activeFilter": { "alias": "activeFilter"; "required": false; }; }, { "filtersSelected": "filtersSelected"; "removedFilter": "removedFilter"; }, never, ["*"], true, never>;
}
