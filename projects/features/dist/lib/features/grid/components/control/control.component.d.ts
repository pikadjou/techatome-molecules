import { OnInit } from '@angular/core';
import { Preset, ViewType } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
/**
 * Panneau latéral des filtres. Un panneau plutôt qu'une modale : les critères
 * restent à côté de la liste, qui se met à jour pendant qu'on les règle.
 */
export declare class TaGridFiltersPanel extends TaAbstractGridComponent<unknown> {
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    get resultCount(): number;
    /** Ne touche qu'aux filtres : le regroupement se pilote depuis ta-grid-control. */
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridFiltersPanel, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridFiltersPanel, "ta-grid-filters-panel", never, {}, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
export declare class TaGridControlComponent extends TaAbstractGridComponent<any> implements OnInit {
    show: import("@angular/core").InputSignal<{
        switchView?: boolean | undefined;
        filters?: boolean | undefined;
        preset?: boolean | undefined;
        group?: boolean | undefined;
        sort?: boolean | undefined;
    }>;
    /** Masque les libellés textuels : ne restent que les icônes. */
    compact: import("@angular/core").InputSignal<boolean>;
    isFiltersOpen: import("@angular/core").WritableSignal<boolean>;
    /** Nombre de critères actifs, hors recherche globale — affiché sur le bouton Filtres. */
    get activeFiltersCount(): number;
    /** Colonnes sur lesquelles un regroupement a du sens. */
    get groupableCols(): {
        key: string;
        label: string;
    }[];
    get hasGroupableCols(): boolean;
    /** Colonnes triables, pour les vues sans en-têtes (cartes). */
    get sortableCols(): {
        key: string;
        label: string;
    }[];
    get hasSortableCols(): boolean;
    get activeSort(): string | null;
    get activeSortDir(): 'asc' | 'desc';
    get activeSortLabel(): string | null;
    get activeGroup(): string | null;
    get activeGroupLabel(): string | null;
    get hasPresets(): boolean;
    get activePresetName(): string | null;
    ngOnInit(): void;
    switchView(type: ViewType): void;
    openFilters(): void;
    setPreset(preset: Preset): void;
    /** Rejouer le même critère inverse le sens. */
    setSort(key: string | null): void;
    setGroup(key: string | null): void;
    isPresetActive(preset: Preset): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridControlComponent, "ta-grid-control", never, { "show": { "alias": "show"; "required": false; "isSignal": true; }; "compact": { "alias": "compact"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
