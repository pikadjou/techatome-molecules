import { ElementRef, EventEmitter, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { Swiper } from "swiper/types";
import * as i0 from "@angular/core";
export interface SwiperData {
    visible$: Observable<boolean>;
    key: string;
}
export declare class SwiperComponent {
    swipeTemplate: import("@angular/core").InputSignal<TemplateRef<any>>;
    slides: import("@angular/core").InputSignal<SwiperData[]>;
    slidesPerPage: import("@angular/core").InputSignal<number>;
    slidesPerGroup: import("@angular/core").InputSignal<number>;
    isFreeMode: import("@angular/core").InputSignal<boolean>;
    startAt: import("@angular/core").InputSignal<number>;
    onSlideChanged: EventEmitter<number>;
    swiperContainer: ElementRef<{
        swiper: Swiper;
    }>;
    constructor();
    ngAfterViewInit(): void;
    trackByKey(_: any, item: SwiperData): string;
    slideChanged($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperComponent, "ta-swiper", never, { "swipeTemplate": { "alias": "swipeTemplate"; "required": true; "isSignal": true; }; "slides": { "alias": "slides"; "required": true; "isSignal": true; }; "slidesPerPage": { "alias": "slidesPerPage"; "required": false; "isSignal": true; }; "slidesPerGroup": { "alias": "slidesPerGroup"; "required": false; "isSignal": true; }; "isFreeMode": { "alias": "isFreeMode"; "required": false; "isSignal": true; }; "startAt": { "alias": "startAt"; "required": false; "isSignal": true; }; }, { "onSlideChanged": "onSlideChanged"; }, never, never, true, never>;
}
