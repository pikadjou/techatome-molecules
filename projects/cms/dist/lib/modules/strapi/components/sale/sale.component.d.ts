import { OnInit } from "@angular/core";
import { InputCheckBox } from "@ta/form-model";
import { TaBaseComponent } from "@ta/utils";
import { TaSaleService } from "../../services/sale.service";
import * as i0 from "@angular/core";
export declare class SaleComponent extends TaBaseComponent implements OnInit {
    acceptation: import("@angular/core").OutputEmitterRef<boolean>;
    readonly saleService: TaSaleService;
    private readonly _tenantConfig;
    checkbox: InputCheckBox;
    get content$(): import("rxjs").Observable<import("../../services/dto/sale").Sale>;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaleComponent, "ta-sale", never, {}, { "acceptation": "acceptation"; }, never, never, true, never>;
}
