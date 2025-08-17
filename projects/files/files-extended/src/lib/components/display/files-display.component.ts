import { NgIf, AsyncPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Menu } from '@ta/menu';
import { TaBaseComponent, FileData, FileStructure, FileType } from '@ta/utils';
import { Observable } from 'rxjs';

import { Feature } from '../upload/files-upload.component';

@Component({
selector: 'ta-files-display',
  templateUrl: './files-display.component.html',
  styleUrls: ['./files-display.component.scss'],,
  standalone: true,
  imports: [NgIf, AsyncPipe],
})
export class FilesDisplayComponent extends TaBaseComponent {
  @Input() files$!: Observable<FileData[]>;
  @Input() menu!: Menu;
  @Input() canAddFile: boolean = true;
  @Input() tempFiles!: FileData[];
  @Input() fileType!: FileType;

  @Output() fileSelected: EventEmitter<FileData & { index: number }> = new EventEmitter();
  @Output() moreInformationSelected: EventEmitter<FileData> = new EventEmitter();
  @Output() fileUploading: EventEmitter<FileStructure[]> = new EventEmitter();

  get canSelectMultipleFiles(): boolean {
    switch (this.fileType) {
      case 'Document':
        return false;
      case 'Image':
        return true;
      default:
        return false;
    }
  }

  get canDisplayTempsFiles(): boolean {
    return this.tempFiles?.length > 0;
  }

  public getFeature(): Feature[] {
    switch (this.fileType) {
      case 'Document':
        return ['upload-file'];
      case 'Image':
        return ['upload-pic'];
      default:
        return [];
    }
  }
}
