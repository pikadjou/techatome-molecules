import { ElementRef, EventEmitter } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { InputTextBox } from "@ta/form-model";
import * as i0 from "@angular/core";
export declare class SearchHistoryDisplayerComponent {
    searchHistory?: {
        type: string;
    };
    placeholder: string;
    isDropDown: boolean;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchHistoryDisplayerComponent, "ta-search-history-displayer", never, { "searchHistory": { "alias": "searchHistory"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "isDropDown": { "alias": "isDropDown"; "required": false; }; }, { "valueCompleted": "valueCompleted"; }, never, never, true, never>;
}
