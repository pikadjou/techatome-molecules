import { IInputTextBox, InputTextBox } from './textbox';

export class InputNumber extends InputTextBox<number> {
  override get value() {
    return Number(super.value);
  }
  override set value(value: number) {
    super.value = Number(value);
  }
  constructor(options: IInputTextBox<string> = {}) {
    super(options);
    this.type = 'number';
  }
}
