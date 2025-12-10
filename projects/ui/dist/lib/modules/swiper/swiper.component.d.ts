import { ElementRef, EventEmitter, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { Swiper } from "swiper/types";
import * as i0 from "@angular/core";
export interface SwiperData {
    visible$: Observable<boolean>;
    key: string;
}
export declare class SwiperComponent {
    swipeTemplate: TemplateRef<any>;
    slides: SwiperData[];
    slidesPerPage: number;
    slidesPerGroup: number;
    isFreeMode: boolean;
    startAt: number;
    onSlideChanged: EventEmitter<number>;
    swiperContainer: ElementRef<{
        swiper: Swiper;
    }>;
    constructor();
    ngAfterViewInit(): void;
    trackByKey(_: any, item: SwiperData): string;
    slideChanged($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperComponent, "ta-swiper", never, { "swipeTemplate": { "alias": "swipeTemplate"; "required": false; }; "slides": { "alias": "slides"; "required": false; }; "slidesPerPage": { "alias": "slidesPerPage"; "required": false; }; "slidesPerGroup": { "alias": "slidesPerGroup"; "required": false; }; "isFreeMode": { "alias": "isFreeMode"; "required": false; }; "startAt": { "alias": "startAt"; "required": false; }; }, { "onSlideChanged": "onSlideChanged"; }, never, never, true, never>;
}
