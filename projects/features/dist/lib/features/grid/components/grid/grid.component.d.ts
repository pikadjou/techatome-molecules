import { Signal, TemplateRef } from '@angular/core';
import { ColConfig } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridComponent<T extends {
    id: number;
}> extends TaAbstractGridComponent<T> {
    cardTemplate: import("@angular/core").InputSignal<TemplateRef<{
        items: T[];
    }>>;
    rowClicked: import("@angular/core").OutputEmitterRef<T>;
    constructor();
    visibleCols: Signal<ColConfig[]>;
    ngOnInit(): void;
    get rows(): T[];
    get sortField(): string | null;
    get sortDir(): 'asc' | 'desc';
    getCellValue(row: T, key: string): any;
    onRowClick(row: T): void;
    onSort(col: ColConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridComponent<any>, "ta-grid", never, { "cardTemplate": { "alias": "cardTemplate"; "required": true; "isSignal": true; }; }, { "rowClicked": "rowClicked"; }, never, never, true, never>;
}
