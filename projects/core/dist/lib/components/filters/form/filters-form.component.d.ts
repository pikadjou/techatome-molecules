import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class FiltersFormComponent extends TaBaseComponent {
    form: InputBase<any>[];
    askValidation$: Observable<null>;
    filtersSelected: EventEmitter<any>;
    constructor();
    apply(data: any): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FiltersFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FiltersFormComponent, "ta-filters-form", never, { "form": { "alias": "form"; "required": false; }; "askValidation$": { "alias": "askValidation$"; "required": false; }; }, { "filtersSelected": "filtersSelected"; }, never, never, true, never>;
}
