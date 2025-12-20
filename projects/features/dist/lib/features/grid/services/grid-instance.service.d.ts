import { TaGridData } from '../models/grid-data';
import * as i0 from "@angular/core";
export declare class TaGridInstanceService<T> {
    readonly grids: {
        [index: string]: TaGridData<T>;
    };
    constructor();
    create(key: string): void;
    get(key: string, create?: boolean): TaGridData<T>;
    has(key: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridInstanceService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridInstanceService<any>>;
}
