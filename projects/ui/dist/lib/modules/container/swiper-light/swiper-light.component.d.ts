import { OnInit, TemplateRef } from '@angular/core';
import { TaDeviceInfoService } from '@ta/capacitor';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class SwiperLightComponent extends TaBaseComponent implements OnInit {
    private _deviceInfoService;
    items: any[];
    template: TemplateRef<any>;
    swiperClasses: string;
    containerClasses?: string;
    forced?: boolean;
    classes: string;
    constructor(_deviceInfoService: TaDeviceInfoService);
    ngOnInit(): void;
    track: (_: any, item: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperLightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperLightComponent, "ta-swiper-light", never, { "items": { "alias": "items"; "required": false; }; "template": { "alias": "template"; "required": false; }; "swiperClasses": { "alias": "swiperClasses"; "required": false; }; "containerClasses": { "alias": "containerClasses"; "required": false; }; "forced": { "alias": "forced"; "required": false; }; }, {}, never, never, true, never>;
}
