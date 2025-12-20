import { InputBase } from '@ta/form-model';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridFormComponent extends TaAbstractGridComponent<unknown> {
    filtersForm: import("@angular/core").WritableSignal<InputBase<any>[]>;
    groupForm: import("@angular/core").WritableSignal<InputBase<any>[]>;
    private _formService;
    ngOnInit(): void;
    applyFilters(data: any): void;
    applyGroup(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridFormComponent, "ta-grid-form", never, {}, {}, never, never, true, never>;
}
