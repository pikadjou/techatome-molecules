import { OnInit } from "@angular/core";
import { TaBaseComponent } from "@ta/utils";
import { TaCmsService } from "../../services/cms.service";
import * as i0 from "@angular/core";
export declare class CmsComponent extends TaBaseComponent implements OnInit {
    contentType: import("@angular/core").InputSignal<string>;
    readonly cmsService: TaCmsService;
    private readonly _tenantConfig;
    get content$(): import("rxjs").Observable<import("../../services/dto/cms").Cms>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmsComponent, "ta-cms", never, { "contentType": { "alias": "contentType"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
