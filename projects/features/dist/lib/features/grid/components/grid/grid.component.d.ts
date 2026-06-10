import { Signal, TemplateRef } from '@angular/core';
import { ColConfig } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridComponent<T extends {
    id: number;
}> extends TaAbstractGridComponent<T> {
    cardTemplate: import("@angular/core").InputSignal<TemplateRef<{
        items: T[];
        selectedIds: Set<number>;
    }>>;
    showSelection: import("@angular/core").InputSignal<boolean>;
    rowClicked: import("@angular/core").OutputEmitterRef<T>;
    selectionChanged: import("@angular/core").OutputEmitterRef<T[]>;
    constructor();
    visibleCols: Signal<ColConfig[]>;
    ngOnInit(): void;
    get rows(): T[];
    get sortField(): string | null;
    get sortDir(): 'asc' | 'desc';
    get isLoading(): boolean;
    get errorMessage(): string;
    get selectedIds(): Set<number>;
    isSelected(id: number): boolean;
    isAllPageSelected(): boolean;
    toggleRow(row: T): void;
    toggleAll(): void;
    getCellValue(row: T, key: string): any;
    onRowClick(row: T): void;
    onSort(col: ColConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridComponent<any>, "ta-grid", never, { "cardTemplate": { "alias": "cardTemplate"; "required": true; "isSignal": true; }; "showSelection": { "alias": "showSelection"; "required": false; "isSignal": true; }; }, { "rowClicked": "rowClicked"; "selectionChanged": "selectionChanged"; }, never, never, true, never>;
}
