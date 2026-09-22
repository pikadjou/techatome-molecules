import { Signal, TemplateRef } from '@angular/core';
import { RowId } from '../../models/table-state';
import { ColConfig } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridComponent<T extends {
    id: RowId;
}> extends TaAbstractGridComponent<T> {
    cardTemplate: import("@angular/core").InputSignal<TemplateRef<{
        items: T[];
        selectedIds: Set<RowId>;
    }>>;
    showSelection: import("@angular/core").InputSignal<boolean>;
    /** Hauteur de ligne : confortable par défaut, compacte pour les longues listes. */
    density: import("@angular/core").InputSignal<"comfortable" | "compact">;
    /** Ce que dit la grille quand elle ne ramène rien ; l'action se projette sur `[emptyAction]`. */
    emptyText: import("@angular/core").InputSignal<string>;
    emptySubtitle: import("@angular/core").InputSignal<string>;
    emptyIcon: import("@angular/core").InputSignal<string>;
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
    /** Largeur d'une ligne d'en-tête de groupe, colonne de sélection comprise. */
    get colspan(): number;
    get selectedIds(): Set<RowId>;
    isSelected(id: number): boolean;
    isAllPageSelected(): boolean;
    toggleRow(row: T): void;
    toggleAll(): void;
    /**
     * Libellé d'un groupe : `groupBy` produit des chaînes, on repasse par le
     * formatteur de la colonne pour retrouver dates et booléens lisibles.
     */
    groupLabel(value: string): string;
    getCellValue(row: T, key: string): any;
    onRowClick(row: T): void;
    onSort(col: ColConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridComponent<any>, "ta-grid", never, { "cardTemplate": { "alias": "cardTemplate"; "required": true; "isSignal": true; }; "showSelection": { "alias": "showSelection"; "required": false; "isSignal": true; }; "density": { "alias": "density"; "required": false; "isSignal": true; }; "emptyText": { "alias": "emptyText"; "required": false; "isSignal": true; }; "emptySubtitle": { "alias": "emptySubtitle"; "required": false; "isSignal": true; }; "emptyIcon": { "alias": "emptyIcon"; "required": false; "isSignal": true; }; }, { "rowClicked": "rowClicked"; "selectionChanged": "selectionChanged"; }, never, ["[emptyAction]"], true, never>;
}
