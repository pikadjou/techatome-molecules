import { EventEmitter, TemplateRef } from '@angular/core';
import { SwiperData } from '@ta/ui';
import * as i0 from "@angular/core";
export declare class QuickActionsCustomComponent {
    elementPerPage: number;
    swipeTemplate: TemplateRef<any>;
    slidesPerGroup: number;
    isFreeMode: boolean;
    onSlideChanged: EventEmitter<number>;
    elements: SwiperData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickActionsCustomComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickActionsCustomComponent, "ta-quick-actions-custom", never, { "elementPerPage": { "alias": "elementPerPage"; "required": false; }; "swipeTemplate": { "alias": "swipeTemplate"; "required": false; }; "slidesPerGroup": { "alias": "slidesPerGroup"; "required": false; }; "isFreeMode": { "alias": "isFreeMode"; "required": false; }; "elements": { "alias": "elements"; "required": false; }; }, { "onSlideChanged": "onSlideChanged"; }, never, never, true, never>;
}
