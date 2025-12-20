import { Observable } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { ajaxRequestFuncParams, ajaxResponse } from '../models/types';
import * as i0 from "@angular/core";
export declare const gridSearchFieldsName = "search";
export declare class TaGridViewService extends TaBaseService {
    constructor();
    getData$<T>(model: string, ajaxParam: ajaxRequestFuncParams): Observable<ajaxResponse<T>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaGridViewService>;
}
