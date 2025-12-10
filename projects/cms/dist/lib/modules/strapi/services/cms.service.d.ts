import { HandleComplexRequest, TaBaseStrapiService } from "@ta/server";
import { Cms } from "./dto/cms";
import * as i0 from "@angular/core";
export declare class TaCmsService extends TaBaseStrapiService {
    readonly local: string;
    readonly cmsContents: HandleComplexRequest<Cms>;
    constructor();
    fetchCmsContents$(type: string, tenantId: string): import("rxjs").Observable<Cms>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaCmsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaCmsService>;
}
