import { InputBase } from "./input/base";
import { InputCheckBox } from "./input/checkbox";
import { InputColorPicker } from "./input/colorPicker";
import { InputDropdown } from "./input/dropdown";
import { IInputChildrenDynamic } from "./input/dynamic";
import { InputImages } from "./input/images";
import { InputLabel } from "./input/label";
import { InputLogo } from "./input/logo";
import { InputNumber } from "./input/number";
import { InputPanel } from "./input/panel";
import { InputRadio } from "./input/radio";
import { InputSchema } from "./input/schema";
import { InputTextarea } from "./input/textarea";
import { InputTextBox } from "./input/textbox";
import { InputUpload } from "./input/upload";
import { InputWysiswyg } from "./input/wysiswyg";

export type FactoryInputType =
  | "InputCheckBox"
  | "InputRadio"
  | "InputColorPicker"
  | "InputDropdown"
  | "InputImages"
  | "InputLabel"
  | "InputLogo"
  | "InputNumber"
  | "InputPanel"
  | "InputSchema"
  | "InputTextarea"
  | "InputTextBox"
  | "InputWysiswyg"
  | "InputUpload";
export class InputFactory {
  public static getInput(
    key: FactoryInputType,
    options: IInputChildrenDynamic
  ): InputBase<any> {
    if (options.templateChildren) {
      options.children = options.templateChildren();
    }

    switch (key) {
      case "InputCheckBox":
        return new InputCheckBox(options);
      case "InputRadio":
        return new InputRadio(options);
      case "InputColorPicker":
        return new InputColorPicker(options);
      case "InputDropdown":
        return new InputDropdown(options);
      case "InputImages":
        return new InputImages(options);
      case "InputLabel":
        return new InputLabel(options);
      case "InputLogo":
        return new InputLogo(options);
      case "InputNumber":
        return new InputNumber(options);
      case "InputPanel":
        return new InputPanel(options);
      case "InputSchema":
        return new InputSchema(options);
      case "InputTextarea":
        return new InputTextarea(options);
      case "InputTextBox":
        return new InputTextBox(options);
      case "InputWysiswyg":
        return new InputWysiswyg(options);
      case "InputUpload":
        return new InputUpload(options);
      default:
        return new InputTextBox(options);
    }
  }
}
