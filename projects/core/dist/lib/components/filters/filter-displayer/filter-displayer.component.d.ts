import { EventEmitter, TemplateRef } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FilterDisplayerComponent extends TaBaseComponent {
    private _bottomSheet;
    form: InputBase<any>[];
    iconType: string;
    container: "button" | "link";
    filtersSelected: EventEmitter<any>;
    filterTemplate: TemplateRef<void>;
    private _isFilterOpen;
    get isFilterOpen(): boolean;
    set isFilterOpen(value: boolean);
    get mobileDetection(): boolean;
    constructor(_bottomSheet: MatBottomSheet);
    selected(filters: any): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterDisplayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterDisplayerComponent, "ta-filter-displayer", never, { "form": { "alias": "form"; "required": false; }; "iconType": { "alias": "iconType"; "required": false; }; "container": { "alias": "container"; "required": false; }; }, { "filtersSelected": "filtersSelected"; }, never, never, true, never>;
}
