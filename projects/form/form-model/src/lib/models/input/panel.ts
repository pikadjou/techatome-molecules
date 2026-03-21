import { IInputBase, InputBase } from "./base";
import { InputLabel } from "./label";

type classAvailable =
  | "with-separator"
  | "no-title-space"
  | "highlight-title"
  | string;

export interface IInputPanel extends IInputBase<null> {
  children?: (InputBase<any> | InputLabel)[];
  containerClass?: classAvailable[];
  contentClass?: string;
  icon?: string;
  required?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export class InputPanel extends InputBase<any> {
  containerClass: classAvailable[];
  contentClass: string;
  icon?: string;
  required?: boolean;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  constructor(options: IInputPanel) {
    super(options);
    this.controlType = "panel";

    this.containerClass = options.containerClass || [];
    this.contentClass = options.contentClass || "";
    this.children = options.children || [];
    this.icon = options.icon;
    this.required = options.required;
    this.level = options.level || 2;
  }
}
