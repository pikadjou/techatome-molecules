import { Picture } from '@ta/services';
import { FileData, FileStructure } from '@ta/utils';
import { Observable } from 'rxjs';

import { IInputBase, InputBase } from './base';

export interface IInputLogo extends IInputBase<string> {
  availableFile$?: Observable<FileData>;
  update?: (data: FileStructure) => Promise<Picture>;
  onFileDeleted?: (FileData: FileData) => void;
  removeFile$?: Observable<FileData>;
}

export class InputLogo extends InputBase<string> {
  public availableFile$!: Observable<FileData> | null;
  public update: ((data: FileStructure) => Promise<Picture>) | null = null;
  public fileDeleted?: (FileData: FileData) => void;
  public removeFile$: Observable<FileData> | null;

  constructor(options: IInputLogo = {}) {
    super(options);
    if (!this.controlType) {
      this.controlType = 'logo';
    }

    this.availableFile$ = options.availableFile$ || null;
    if (options.update) {
      this.update = options.update;
    }

    if (options.onFileDeleted) this.fileDeleted = options.onFileDeleted;
    this.removeFile$ = options.removeFile$ || null;
  }
}