import { IInputBase, InputBase } from "./base";

export interface IInputRating<T> extends IInputBase<T> {
  max?: number;
  icon?: string;
  iconFilled?: string;
  allowHalf?: boolean;
  readonly?: boolean;
}

export class InputRating<T = number> extends InputBase<T> {
  override controlType = "rating";
  max: number;
  icon?: string;
  iconFilled?: string;
  allowHalf: boolean;
  readonly: boolean;

  constructor(options: IInputRating<T> = {}) {
    super(options);
    this.max = options.max || 5;
    this.icon = options.icon || "star";
    this.iconFilled = options.iconFilled || "star_fill";
    this.allowHalf = options.allowHalf || false;
    this.readonly = options.readonly || false;
  }
}
