import { OnInit } from '@angular/core';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class PwaComponent extends TaBaseComponent implements OnInit {
    askClose: import("@angular/core").OutputEmitterRef<void>;
    isShowed: boolean;
    pictureWidth: number;
    private _pwa;
    constructor();
    ngOnInit(): void;
    onNoClick(): void;
    onYesClick(): void;
    dontAsk(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaComponent, "ta-pwa", never, {}, { "askClose": "askClose"; }, never, never, true, never>;
}
