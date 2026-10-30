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

  /** Le contrôle reçoit un nombre, sans réécrire le champ en cours de frappe. */
  protected override syncFromControl(value: number | null) {
    const raw = value as unknown;
    const parsed = raw === null || raw === undefined || raw === "" ? null : Number(raw);
    this._value.set(parsed as number);
    if (parsed !== raw) {
      this.formControl?.setValue(parsed, { emitEvent: false, emitModelToViewChange: false });
    }
  }

  constructor(options: IInputNumber = {}) {
    super(options);
    this.type = "number";
    this.decimals = options.decimals ?? 0;
    this.step = this.decimals > 0 ? `${Math.pow(10, -this.decimals)}` : "1";
  }
}
