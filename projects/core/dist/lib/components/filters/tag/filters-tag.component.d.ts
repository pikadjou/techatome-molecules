import { EventEmitter } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { ActiveFilterTag } from "../types";
import * as i0 from "@angular/core";
export declare class FiltersTagComponent extends TaBaseComponent {
    activeFilter: import("@angular/core").InputSignal<ActiveFilterTag[]>;
    removedFilter: EventEmitter<ActiveFilterTag>;
    constructor();
    remove(filter: ActiveFilterTag): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersTagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersTagComponent, "ta-filters-tag", never, { "activeFilter": { "alias": "activeFilter"; "required": false; "isSignal": true; }; }, { "removedFilter": "removedFilter"; }, never, never, true, never>;
}
