import { IInputBase, InputBase } from "./base";

export interface IInputTextBox<T> extends IInputBase<T> {
  type?: string;
  icon?: string;
  iconClicked?: () => void;
  step?: string;
}

export class InputTextBox<T = string> extends InputBase<T> {
  override controlType = "textbox";
  icon?: string | null;
  iconClicked?: () => void;
  step?: string;

  constructor(options: IInputTextBox<T> = {}) {
    super(options);
    this.type = options.type || "text";
    this.icon = options.icon || null;
    this.iconClicked = options.iconClicked;
    this.step = options.step;
  }
}
