import { ElementRef, TemplateRef } from '@angular/core';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridComponent<T extends {
    id: number;
}> extends TaAbstractGridComponent<T> {
    cardTemplate: import("@angular/core").InputSignal<TemplateRef<{
        items: T[];
    }>>;
    rowClicked: import("@angular/core").OutputEmitterRef<T>;
    tableElement: ElementRef;
    private _renderer;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridComponent<any>, "ta-grid", never, { "cardTemplate": { "alias": "cardTemplate"; "required": true; "isSignal": true; }; }, { "rowClicked": "rowClicked"; }, never, never, true, never>;
}
