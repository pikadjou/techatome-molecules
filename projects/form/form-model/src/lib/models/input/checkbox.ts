import { IInputBase, InputBase } from "./base";

export interface IInputCheckBox extends IInputBase<boolean> {
  toggle?: boolean;

  /**
   * Clés de traduction des deux états d'un interrupteur. Sans elles, la
   * position du curseur est la seule indication ; avec, l'état se lit. À poser
   * quand se tromper coûte cher — ce qui est publié, ce qui est notifié.
   */
  onLabel?: string;
  offLabel?: string;
}

export class InputCheckBox extends InputBase<boolean> {
  override controlType = "checkbox";

  public onLabel?: string;
  public offLabel?: string;

  constructor(options: IInputCheckBox = {}) {
    super(options);

    this.onLabel = options.onLabel;
    this.offLabel = options.offLabel;

    if (options.toggle === true) {
      this.controlType = "toggle";
    }

    if (!this.value) {
      this.value = false;
    }
  }
}
