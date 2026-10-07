import { InputRangeSlider, RangeSliderValue } from "@ta/form-model";
import { TaAbstractInputComponent } from "../../abstract.component";
import * as i0 from "@angular/core";
export declare class RangeSliderComponent extends TaAbstractInputComponent<InputRangeSlider, RangeSliderValue> {
    readonly low: import("@angular/core").Signal<number>;
    readonly high: import("@angular/core").Signal<number>;
    readonly lowPercent: import("@angular/core").Signal<number>;
    readonly highPercent: import("@angular/core").Signal<number>;
    readonly lowLabel: import("@angular/core").Signal<string>;
    readonly highLabel: import("@angular/core").Signal<string>;
    private readonly _first;
    private readonly _second;
    readonly first: import("@angular/core").Signal<number>;
    readonly second: import("@angular/core").Signal<number>;
    onFirst(value: number): void;
    onSecond(value: number): void;
    private _move;
    private _isInSync;
    private _percent;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeSliderComponent, "ta-input-range-slider", never, {}, {}, never, never, true, never>;
}
