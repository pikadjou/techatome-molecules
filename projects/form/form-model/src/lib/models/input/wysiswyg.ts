import { WysiswgBlockData } from '@ta/wysiswyg';

import { IInputBase, InputBase } from './base';

export interface IWysiswyg extends IInputBase<WysiswgBlockData[]> {}

export class InputWysiswyg extends InputBase<WysiswgBlockData[] | null> {
  override controlType = 'wysiswyg';

  constructor(options: IWysiswyg = {}) {
    super(options);
  }
}
