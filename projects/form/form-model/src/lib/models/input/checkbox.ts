import { IInputBase, InputBase } from './base';

export interface IInputCheckBox extends IInputBase<boolean> {
  toggle?: boolean;

  /** Clés de traduction des deux états d'un interrupteur. */
  onLabel?: string;
  offLabel?: string;
}

export class InputCheckBox extends InputBase<boolean> {
  override controlType = 'checkbox';

  public onLabel?: string;
  public offLabel?: string;

  constructor(options: IInputCheckBox = {}) {
    super(options);

    this.onLabel = options.onLabel;
    this.offLabel = options.offLabel;

    if (options.toggle === true) {
      this.controlType = 'toggle';
    }

    if (!this.value) {
      this.value = false;
    }
  }
}
