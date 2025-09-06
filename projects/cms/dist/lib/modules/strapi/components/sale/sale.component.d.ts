import { EventEmitter, OnInit } from '@angular/core';
import { InputCheckBox } from '@ta/form-model';
import { TenantConfig } from '@ta/server';
import { TaBaseComponent } from '@ta/utils';
import { TaSaleService } from '../../services/sale.service';
import * as i0 from "@angular/core";
export declare class SaleComponent extends TaBaseComponent implements OnInit {
    saleService: TaSaleService;
    private tenantConfig;
    acceptation: EventEmitter<boolean>;
    checkbox: InputCheckBox;
    get content$(): import("rxjs").Observable<import("../../services/dto/sale").Sale>;
    constructor(saleService: TaSaleService, tenantConfig: TenantConfig);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaleComponent, [null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaleComponent, "ta-sale", never, {}, { "acceptation": "acceptation"; }, never, never, true, never>;
}
