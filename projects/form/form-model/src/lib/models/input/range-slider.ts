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

export class InputRangeSlider extends InputBase<RangeSliderValue> {
  public min: number;
  public max: number;
  public step: number;
  public format: (value: number, end: boolean) => string;

  override controlType = "rangeSlider";

  constructor(options: IInputRangeSlider = {}) {
    super(options);

    this.min = options.min ?? 0;
    this.max = options.max ?? 100;
    this.step = options.step ?? 1;
    // Pas de valeur par défaut : elle bloquerait `value$`.
    this.format = options.format ?? ((value) => String(value));
  }
}
