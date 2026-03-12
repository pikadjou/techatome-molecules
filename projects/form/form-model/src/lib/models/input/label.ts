import { FormGroup } from "@angular/forms";

import { IInputBase, InputBase } from "./base";

export interface IInputLabel extends IInputBase<null> {
  icon?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
export class InputLabel extends InputBase<null> implements IInputLabel {
  icon?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  constructor(options: IInputLabel = {}) {
    super(options);

    this.controlType = "label";
    this.icon = options.icon;
    this.level = options.level;
  }

  public override createFormControl(group?: FormGroup) {}
}
