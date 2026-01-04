import { OnInit, TemplateRef } from "@angular/core";
import { TaDeviceInfoService } from "@ta/capacitor";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class SwiperLightComponent extends TaBaseComponent implements OnInit {
    private _deviceInfoService;
    items: import("@angular/core").InputSignal<any[]>;
    template: import("@angular/core").InputSignal<TemplateRef<any>>;
    swiperClasses: import("@angular/core").InputSignal<string>;
    containerClasses: import("@angular/core").InputSignal<string | undefined>;
    forced: import("@angular/core").InputSignal<boolean>;
    classes: string;
    constructor(_deviceInfoService: TaDeviceInfoService);
    ngOnInit(): void;
    track: (_: any, item: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwiperLightComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwiperLightComponent, "ta-swiper-light", never, { "items": { "alias": "items"; "required": true; "isSignal": true; }; "template": { "alias": "template"; "required": true; "isSignal": true; }; "swiperClasses": { "alias": "swiperClasses"; "required": false; "isSignal": true; }; "containerClasses": { "alias": "containerClasses"; "required": false; "isSignal": true; }; "forced": { "alias": "forced"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
