import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { EmptyComponent } from '@ta/ui';
import { FileData, FileType, SafePipe, StopPropagationDirective, TaBaseComponent } from '@ta/utils';

import { FileCardComponent } from './card/file/file-card.component';

@Component({
  selector: 'ta-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    EmptyComponent,
    FileCardComponent,
    FontIconComponent,
    LocalIconComponent,
    SafePipe,
    StopPropagationDirective,
  ],
})
export class FileListComponent extends TaBaseComponent {
  @Input()
  files: FileData[] = [];

  @Input()
  canDeleteFile: boolean = false;

  @Output()
  fileSelected = new EventEmitter<FileData & { index: number }>();

  @Output()
  moreInformationSelected: EventEmitter<FileData> = new EventEmitter<FileData>();

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
