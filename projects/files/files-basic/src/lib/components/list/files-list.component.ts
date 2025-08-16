import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamBaseComponent, FileData, FileType } from '@camelot/utils';

@Component({
  selector: 'cam-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FileListComponent extends CamBaseComponent {
  @Input()
  files: FileData[] = [];

  @Input()
  canDeleteFile: boolean = false;

  @Output()
  fileSelected = new EventEmitter<FileData & { index: number }>();

  @Output()
  moreInformationSelected: EventEmitter<FileData> =
    new EventEmitter<FileData>();

  @Output()
  fileDeleted = new EventEmitter<FileData>();

  constructor() {
    super();
  }

  public canDisplayFileType(fileType: FileType): boolean {
    if (this.files && this.files[0]) return this.files[0].type === fileType;

    return false;
  }

  public onFileSelected(file: FileData, index: number) {
    if (file.isLoading) return;

    this.fileSelected.emit({ ...file, ...{ index } });
  }

  public onMoreInformationSelected(file: FileData) {
    if (file.isLoading) return;

    this.moreInformationSelected.emit(file);
  }

  public deleteFile(fileData: FileData) {
    this.fileDeleted.emit(fileData);
  }
}
