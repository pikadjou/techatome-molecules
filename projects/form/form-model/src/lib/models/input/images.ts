import { Observable } from "rxjs";

import { DocumentDto, Picture } from "@ta/services";
import { FileData, FileStructure } from "@ta/utils";

import { IInputBase, InputBase } from "./base";

export interface IInputImages extends IInputBase<DocumentDto[]> {
  files$?: Observable<FileData[]>;
  update?: (data: FileStructure[]) => Promise<Picture[]>;
  onFileDeleted?: (FileData: FileData) => void;
  removeFile$?: Observable<FileData>;
}

export class InputImages extends InputBase<DocumentDto[]> {
  public files$!: Observable<FileData[]> | null;
  public update: ((data: FileStructure[]) => Promise<Picture[]>) | null = null;
  public fileDeleted?: (FileData: FileData) => void;
  public removeFile$: Observable<FileData> | null;

  constructor(options: IInputImages = {}) {
    super(options);
    if (!this.controlType) {
      this.controlType = "images";
    }

    this.files$ = options.files$ || null;
    if (options.update) {
      this.update = options.update;
    }

    if (options.onFileDeleted) {
      this.fileDeleted = options.onFileDeleted;
    }
    this.removeFile$ = options.removeFile$ || null;
  }
}
