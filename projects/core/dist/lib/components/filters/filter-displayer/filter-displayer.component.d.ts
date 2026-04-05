import { TemplateRef } from "@angular/core";
import { InputBase } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class FilterDisplayerComponent extends TaBaseComponent {
    form: import("@angular/core").InputSignal<InputBase<any>[]>;
    iconType: import("@angular/core").InputSignal<string>;
    container: import("@angular/core").InputSignal<"button" | "link">;
    filtersSelected: import("@angular/core").OutputEmitterRef<any>;
    filterTemplate: TemplateRef<void>;
    private _isFilterOpen;
    get isFilterOpen(): boolean;
    set isFilterOpen(value: boolean);
    get mobileDetection(): boolean;
    private _bottomSheet;
    constructor();
    selected(filters: any): void;
    open(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterDisplayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterDisplayerComponent, "ta-filter-displayer", never, { "form": { "alias": "form"; "required": false; "isSignal": true; }; "iconType": { "alias": "iconType"; "required": false; "isSignal": true; }; "container": { "alias": "container"; "required": false; "isSignal": true; }; }, { "filtersSelected": "filtersSelected"; }, never, never, true, never>;
}
