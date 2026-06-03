import { IInputNumber, InputNumber } from "./number";

export class InputCurrency extends InputNumber {
  constructor(options?: IInputNumber) {
    super({ decimals: 2, icon: 'euro', ...options });
  }
}
