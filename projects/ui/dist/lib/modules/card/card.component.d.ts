import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CardComponent {
    highlight: import("@angular/core").InputSignal<boolean>;
    shadow: import("@angular/core").InputSignal<boolean>;
    fullHeight: import("@angular/core").InputSignal<boolean>;
    noContent: import("@angular/core").InputSignal<boolean>;
    directionCard: import("@angular/core").InputSignal<"vertical" | "horizontal" | null>;
    isNew: import("@angular/core").InputSignal<boolean>;
    click: EventEmitter<any>;
    hasHandler: boolean;
    ngOnInit(): void;
    constructor();
    clickTrigger(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "ta-card", never, { "highlight": { "alias": "highlight"; "required": false; "isSignal": true; }; "shadow": { "alias": "shadow"; "required": false; "isSignal": true; }; "fullHeight": { "alias": "fullHeight"; "required": false; "isSignal": true; }; "noContent": { "alias": "noContent"; "required": false; "isSignal": true; }; "directionCard": { "alias": "directionCard"; "required": false; "isSignal": true; }; "isNew": { "alias": "isNew"; "required": false; "isSignal": true; }; }, { "click": "click"; }, never, ["ta-card-image", "ta-card-header", "ta-card-content", "ta-card-cta"], true, never>;
}
