import { IInputTextBox, InputTextBox } from "./textbox";

export interface IInputNumber extends IInputTextBox<number> {
  decimals?: number;
}

export class InputNumber extends InputTextBox<number> {
  decimals: number;

  override get value() {
    return Number(super.value);
  }
  override set value(value: number) {
    super.value = Number(value);
  }

  constructor(options: IInputNumber = {}) {
    super(options);
    this.type = "number";
    this.decimals = options.decimals ?? 0;
    this.step = this.decimals > 0 ? `${Math.pow(10, -this.decimals)}` : "1";
  }
}
