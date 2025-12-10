import { WysiswgBlockData } from "@ta/wysiswyg";

import { IInputBase, InputBase } from "./base";

export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {
  stringValue?: string | null;
}

export class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
  override controlType = "wysiswyg";

  constructor(options: IWysiswyg = {}) {
    super(options);
    if (options.stringValue) {
      try {
        this.value = JSON.parse(options.stringValue);
      } catch (e) {}
    }
  }
}
