import { AsyncPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { Observable } from 'rxjs';

import { FileListComponent } from '@ta/files-basic';
import { Menu, NavigationComponent } from '@ta/menu';
import { ErrorComponent, LoaderComponent } from '@ta/ui';
import { FileData, FileStructure, FileType, TaBaseComponent } from '@ta/utils';

import { Feature, UploadComponent } from '../upload/files-upload.component';

@Component({
  selector: 'ta-files-display',
  templateUrl: './files-display.component.html',
  styleUrls: ['./files-display.component.scss'],
  standalone: true,
  imports: [AsyncPipe, LoaderComponent, ErrorComponent, UploadComponent, FileListComponent, NavigationComponent],
})
export class FilesDisplayComponent extends TaBaseComponent {
  files$ = input.required<Observable<FileData[]>>();
  menu = input.required<Menu>();
  canAddFile = input<boolean>(true);
  tempFiles = input.required<FileData[]>();
  fileType = input.required<FileType>();

  fileSelected = output<FileData & { index: number }>();
  moreInformationSelected = output<FileData>();
  fileUploading = output<FileStructure[]>();

  get canSelectMultipleFiles(): boolean {
    switch (this.fileType()) {
      case 'Document':
        return false;
      case 'Image':
        return true;
      default:
        return false;
    }
  }

  get canDisplayTempsFiles(): boolean {
    return this.tempFiles()?.length > 0;
  }

  public getFeature(): Feature[] {
    switch (this.fileType()) {
      case 'Document':
        return ['upload-file'];
      case 'Image':
        return ['upload-pic'];
      default:
        return [];
    }
  }
}
