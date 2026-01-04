import { EventEmitter, TemplateRef } from "@angular/core";
import { SwiperData } from "@ta/ui";
import * as i0 from "@angular/core";
export declare class QuickActionsCustomComponent {
    elementPerPage: import("@angular/core").InputSignal<number>;
    swipeTemplate: import("@angular/core").InputSignal<TemplateRef<any>>;
    slidesPerGroup: import("@angular/core").InputSignal<number>;
    isFreeMode: import("@angular/core").InputSignal<boolean>;
    onSlideChanged: EventEmitter<number>;
    elements: import("@angular/core").InputSignal<SwiperData[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickActionsCustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickActionsCustomComponent, "ta-quick-actions-custom", never, { "elementPerPage": { "alias": "elementPerPage"; "required": false; "isSignal": true; }; "swipeTemplate": { "alias": "swipeTemplate"; "required": true; "isSignal": true; }; "slidesPerGroup": { "alias": "slidesPerGroup"; "required": false; "isSignal": true; }; "isFreeMode": { "alias": "isFreeMode"; "required": false; "isSignal": true; }; "elements": { "alias": "elements"; "required": true; "isSignal": true; }; }, { "onSlideChanged": "onSlideChanged"; }, never, never, true, never>;
}
