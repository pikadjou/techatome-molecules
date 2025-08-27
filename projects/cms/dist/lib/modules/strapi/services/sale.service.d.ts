import { CamBaseStrapiService, HandleComplexRequest } from '@ta/server';
import { Sale } from './dto/sale';
import * as i0 from "@angular/core";
export declare class CamSaleService extends CamBaseStrapiService {
    readonly local: string;
    readonly saleContents: HandleComplexRequest<Sale>;
    constructor();
    fetchSaleContents$(tenantId: string): import("rxjs").Observable<Sale>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamSaleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamSaleService>;
}
