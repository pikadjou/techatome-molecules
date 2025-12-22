import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardComponent {
    highlight: boolean;
    shadow: boolean;
    fullHeight: boolean;
    noContent: boolean;
    directionCard: 'vertical' | 'horizontal' | null;
    isNew: boolean;
    click: EventEmitter<any>;
    hasHandler: boolean;
    ngOnInit(): void;
    constructor();
    clickTrigger(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "ta-card", never, { "highlight": { "alias": "highlight"; "required": false; }; "shadow": { "alias": "shadow"; "required": false; }; "fullHeight": { "alias": "fullHeight"; "required": false; }; "noContent": { "alias": "noContent"; "required": false; }; "directionCard": { "alias": "directionCard"; "required": false; }; "isNew": { "alias": "isNew"; "required": false; }; }, { "click": "click"; }, never, ["ta-card-image", "ta-card-header", "ta-card-content", "ta-card-cta"], true, never>;
}
