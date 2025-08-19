import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';

import { FileListComponent } from '@ta/files-basic';
import { Menu, ToggleNavigationComponent } from '@ta/menu';
import { ErrorComponent, LoaderComponent } from '@ta/ui';
import { FileData, FileStructure, FileType, TaBaseComponent } from '@ta/utils';

import { Feature, UploadComponent } from '../upload/files-upload.component';

@Component({
  selector: 'ta-files-display',
  templateUrl: './files-display.component.html',
  styleUrls: ['./files-display.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    LoaderComponent,
    ErrorComponent,
    UploadComponent,
    ToggleNavigationComponent,
    FileListComponent,
  ],
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
