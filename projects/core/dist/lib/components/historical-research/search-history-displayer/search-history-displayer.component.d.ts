import { ElementRef, EventEmitter } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { InputTextBox } from "@ta/form-model";
import * as i0 from "@angular/core";
export declare class SearchHistoryDisplayerComponent {
    searchHistory: import("@angular/core").InputSignal<{
        type: string;
    } | undefined>;
    placeholder: import("@angular/core").InputSignal<string>;
    isDropDown: import("@angular/core").InputSignal<boolean>;
    valueCompleted: EventEmitter<any>;
    searchField: ElementRef | null;
    searchTrigger: MatMenuTrigger | null;
    get searchFieldWidth(): any;
    get listRecentSearches(): string[] | null;
    input: InputTextBox<string>;
    searchCompleted(search: string): void;
    private _getFromLocalStorage;
    private _saveInLocalStorage;
    private orderAndSelect;
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchHistoryDisplayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchHistoryDisplayerComponent, "ta-search-history-displayer", never, { "searchHistory": { "alias": "searchHistory"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "isDropDown": { "alias": "isDropDown"; "required": false; "isSignal": true; }; }, { "valueCompleted": "valueCompleted"; }, never, never, true, never>;
}
