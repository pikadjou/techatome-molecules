import { Filter } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridTagsComponent extends TaAbstractGridComponent<unknown> {
    get group(): null;
    get activeFilters(): import("../../models/types").ActiveFilter[];
    ngOnInit(): void;
    remove(filter: Filter): void;
    removeGroup(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridTagsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridTagsComponent, "ta-grid-tags", never, {}, {}, never, never, true, never>;
}
