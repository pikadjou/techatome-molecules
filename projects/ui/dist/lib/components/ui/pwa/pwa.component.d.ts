import { EventEmitter, OnInit } from "@angular/core";
import { TaPwaService } from "@ta/capacitor";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
export declare class PwaComponent extends TaBaseComponent implements OnInit {
    private _pwa;
    askClose: EventEmitter<null>;
    isShowed: boolean;
    pictureWidth: number;
    constructor(_pwa: TaPwaService);
    ngOnInit(): void;
    onNoClick(): void;
    onYesClick(): void;
    dontAsk(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PwaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PwaComponent, "ta-pwa", never, {}, { "askClose": "askClose"; }, never, never, true, never>;
}
