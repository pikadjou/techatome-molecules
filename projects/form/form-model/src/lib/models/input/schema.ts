import { Picture } from '@ta/services';
import { FileStructure } from '@ta/utils';

import { IInputBase, InputBase } from './base';

export interface IInputSchema extends IInputBase<string> {
  update?: (data: FileStructure[]) => Promise<Picture[]>;
}

export class InputSchema extends InputBase<string> {
  public update: ((data: FileStructure[]) => Promise<Picture[]>) | null = null;

  constructor(options: IInputSchema = {}) {
    super(options);
    this.controlType = 'schema';

    if (options.update) {
      this.update = options.update;
    }
  }
}
