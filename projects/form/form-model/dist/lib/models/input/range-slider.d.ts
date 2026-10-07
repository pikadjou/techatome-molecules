import { IInputBase, InputBase } from "./base";
export interface RangeSliderValue {
    min: number;
    max: number;
}
export interface IInputRangeSlider extends IInputBase<RangeSliderValue> {
    min?: number;
    max?: number;
    step?: number;
    /** `end` vaut `true` quand le curseur est en butée. */
    format?: (value: number, end: boolean) => string;
}
export declare class InputRangeSlider extends InputBase<RangeSliderValue> {
    min: number;
    max: number;
    step: number;
    format: (value: number, end: boolean) => string;
    controlType: string;
    constructor(options?: IInputRangeSlider);
}
