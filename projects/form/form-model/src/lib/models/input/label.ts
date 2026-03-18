import { FormGroup } from "@angular/forms";

import { IInputBase, InputBase } from "./base";

export interface IInputLabel extends IInputBase<null> {
  icon?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  required?: boolean;
}
export class InputLabel extends InputBase<null> implements IInputLabel {
  icon?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  required?: boolean;

  constructor(options: IInputLabel = {}) {
    super(options);

    this.controlType = "label";
    this.icon = options.icon;
    this.level = options.level;
    this.required = options.required;
  }

  public override createFormControl(group?: FormGroup) {}
}
