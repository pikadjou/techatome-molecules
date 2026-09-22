import { IDataService } from '../../models/grid-data';
import { ColMetaData, PaginationMode, Preset } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridContainerComponent<T = unknown> extends TaAbstractGridComponent<T> {
    initialData: import("@angular/core").InputSignal<T[] | undefined>;
    model: import("@angular/core").InputSignal<string>;
    colsMetaData: import("@angular/core").InputSignal<ColMetaData<T>[]>;
    preset: import("@angular/core").InputSignal<Preset[] | undefined>;
    /** Source de données maison, quand la grille ne lit pas un modèle du serveur. */
    dataService: import("@angular/core").InputSignal<IDataService<T> | undefined>;
    /** `cursor` pour une source qui ne sait pas compter : le « voir plus » remplace les numéros de page. */
    pagination: import("@angular/core").InputSignal<PaginationMode>;
    pageSize: import("@angular/core").InputSignal<number | undefined>;
    private _session;
    private _service;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridContainerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridContainerComponent<any>, "ta-grid-container", never, { "initialData": { "alias": "initialData"; "required": false; "isSignal": true; }; "model": { "alias": "model"; "required": false; "isSignal": true; }; "colsMetaData": { "alias": "colsMetaData"; "required": false; "isSignal": true; }; "preset": { "alias": "preset"; "required": false; "isSignal": true; }; "dataService": { "alias": "dataService"; "required": false; "isSignal": true; }; "pagination": { "alias": "pagination"; "required": false; "isSignal": true; }; "pageSize": { "alias": "pageSize"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
