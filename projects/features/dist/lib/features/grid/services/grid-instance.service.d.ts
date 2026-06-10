import { TaGridData } from '../models/grid-data';
import * as i0 from "@angular/core";
export declare class TaGridInstanceService {
    readonly grids: {
        [index: string]: TaGridData<any>;
    };
    constructor();
    create(key: string): void;
    get<T = any>(key: string, create?: boolean): TaGridData<T>;
    has(key: string): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridInstanceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridInstanceService>;
}
