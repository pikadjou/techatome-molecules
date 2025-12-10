import { OnInit } from "@angular/core";
import { TenantConfig } from "@ta/server";
import { TaBaseComponent } from "@ta/utils";
import { TaCmsService } from "../../services/cms.service";
import * as i0 from "@angular/core";
export declare class CmsComponent extends TaBaseComponent implements OnInit {
    cmsService: TaCmsService;
    private tenantConfig;
    contentType: string;
    get content$(): import("rxjs").Observable<import("../../services/dto/cms").Cms>;
    constructor(cmsService: TaCmsService, tenantConfig: TenantConfig);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CmsComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmsComponent, "ta-cms", never, { "contentType": { "alias": "contentType"; "required": false; }; }, {}, never, never, true, never>;
}
