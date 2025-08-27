import { OnDestroy } from '@angular/core';
import { CamAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export declare abstract class TaBaseComponent extends CamAbstractComponent implements OnDestroy {
    constructor();
    trackById(_: any, item: {
        id: number | string;
    }): string | number;
    trackByKey(_: any, item: {
        key: string;
    }): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaBaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaBaseComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
