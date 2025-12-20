import { ElementRef, EventEmitter, Renderer2, TemplateRef } from '@angular/core';
import { TaAbstractGridComponent } from '../abstract.component';
import * as i0 from "@angular/core";
export declare class TaGridComponent<T extends {
    id: number;
}> extends TaAbstractGridComponent<T> {
    private renderer;
    cardTemplate: TemplateRef<{
        items: T[];
    }>;
    rowClicked: EventEmitter<T>;
    tableElement: ElementRef;
    constructor(renderer: Renderer2);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaGridComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaGridComponent<any>, "ta-grid", never, { "cardTemplate": { "alias": "cardTemplate"; "required": false; }; }, { "rowClicked": "rowClicked"; }, never, never, true, never>;
}
