import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaBaseComponent } from '@ta/utils';
import { TaGridData } from '../models/grid-data';
import * as i0 from "@angular/core";
export declare abstract class TaAbstractGridComponent<T> extends TaBaseComponent implements OnInit {
    gridId: import("@angular/core").InputSignal<string>;
    grid(): TaGridData<T>;
    isGroup(): boolean;
    data(): T[];
    dataByGroup(): {
        key: string;
        data: T[];
    }[];
    displayType(): import("@ta/features").ViewType;
    isReady$: Observable<boolean>;
    isDataReady$: Observable<boolean>;
    protected _grid: TaGridData<T>;
    private _dataService;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAbstractGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaAbstractGridComponent<any>, "ng-component", never, { "gridId": { "alias": "gridId"; "required": true; "isSignal": true; }; }, {}, never, never, false, never>;
}
