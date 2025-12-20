import { AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { ColMetaData, Preset } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridContainerComponent<T = unknown> extends TaAbstractGridComponent<T> implements AfterViewInit, OnDestroy {
    initialData: import("@angular/core").InputSignal<T[] | undefined>;
    colsMetaData: ColMetaData<any>[];
    preset?: Preset[];
    tableElement: ElementRef;
    private _session;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridContainerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridContainerComponent<any>, "ta-grid-container", never, { "initialData": { "alias": "initialData"; "required": false; "isSignal": true; }; "colsMetaData": { "alias": "colsMetaData"; "required": false; }; "preset": { "alias": "preset"; "required": false; }; }, {}, never, ["*"], true, never>;
}
