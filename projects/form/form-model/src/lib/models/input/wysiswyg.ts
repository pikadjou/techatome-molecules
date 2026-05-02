import { EditorToolType, EDITOR_ALL_TOOLS, WysiswgBlockData } from "@ta/wysiswyg";

import { IInputBase, InputBase } from "./base";

export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
  stringValue?: string | null;
  enabledTools?: EditorToolType[];
  placeholder?: string;
}

export class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
  override controlType = "wysiswyg";
  enabledTools: EditorToolType[];
  placeholder: string;

  constructor(options: IWysiswyg = {}) {
    super(options);
    this.enabledTools = options.enabledTools ?? EDITOR_ALL_TOOLS;
    this.placeholder = options.placeholder ?? '';
    if (options.stringValue) {
      try {
        this.value = JSON.parse(options.stringValue);
      } catch (e) {}
    }
  }
}
