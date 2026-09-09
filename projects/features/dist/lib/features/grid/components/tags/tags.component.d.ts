import { Filter } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridTagsComponent extends TaAbstractGridComponent<unknown> {
    get group(): null;
    get activeFilters(): import("../../models/types").ActiveFilter[];
    get hasActiveFilters(): boolean;
    /** Clé de traduction du libellé d'un critère — le champ de recherche n'est pas une colonne. */
    labelKey(key: string): string;
    /**
     * Suffixe lisible du chip : « : Electronics », « ≥ 100 », « : « book » ».
     * L'opérateur n'apparaît que lorsqu'il porte du sens.
     */
    formatValue(filter: Filter): string;
    remove(filter: Filter): void;
    removeGroup(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridTagsComponent, "ta-grid-tags", never, {}, {}, never, never, true, never>;
}
