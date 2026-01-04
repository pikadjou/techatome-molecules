import { EventEmitter, TemplateRef } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class SearchDisplayerComponent extends TaBaseComponent {
    private _bottomSheet;
    container: import("@angular/core").InputSignal<"button" | "link">;
    placeholder: import("@angular/core").InputSignal<string>;
    searchHistory: import("@angular/core").InputSignal<{
        type: string;
    } | undefined>;
    valueCompleted: EventEmitter<any>;
    searchTemplate: TemplateRef<void>;
    get mobileDetection(): boolean;
    constructor(_bottomSheet: MatBottomSheet);
    openDialog(): void;
    action(result: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchDisplayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchDisplayerComponent, "ta-search-displayer", never, { "container": { "alias": "container"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "searchHistory": { "alias": "searchHistory"; "required": false; "isSignal": true; }; }, { "valueCompleted": "valueCompleted"; }, never, never, true, never>;
}
