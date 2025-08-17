import { NgIf, NgFor } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';

import { FilePicker, PickedFile } from '@capawesome/capacitor-file-picker';
import { InputUpload, InputUploadValue } from '@ta/form-model';
import { CamDocumentsService, DocumentDto } from '@ta/services';
import { downloadFile, isNonNullable } from '@ta/utils';

import { CamAbstractInputComponent } from '../../abstract.component';

type InProgressFile = {
  name: string;
  progress: number;
  completed: DocumentDto | null;
};

@Component({
selector: 'ta-input-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, FontIconComponent],
})
export class UploadComponent extends CamAbstractInputComponent<InputUpload> implements OnInit {
  @Output() uploadStatusChanged = new EventEmitter<boolean>();

  @ViewChild('fileDropRef', { static: false }) fileDropEl!: ElementRef;

  private readonly _documentsService = inject(CamDocumentsService);
  private _invervalId: number;

  public inProgressFiles: InProgressFile[] = [];

  constructor() {
    super();

    this._invervalId = window.setInterval(() => {
      if (!this.inProgressFiles || this.inProgressFiles.length === 0) {
        return;
      }
      for (const file of this.inProgressFiles) {
        if (file.progress === 100) {
          continue;
        }
        if (file.progress >= 95) {
          continue;
        }
        file.progress += 5;
      }
    }, 1000);
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.input.value && this.input.value.length > 0) {
      const ids = this.input.value.map(file => file.id);
      this.requestState.asked();
      this._documentsService.fetchDocuments$(ids).subscribe({
        next: () => {
          const documents = this._documentsService.getDocuments(ids);
          for (let doc of documents ?? []) {
            this.inProgressFiles.push({
              name: doc.name ?? '',
              completed: doc,
              progress: 100,
            });
          }
          this.requestState.completed();
        },
      });
    }
  }
  override ngOnDestroy(): void {
    window.clearInterval(this._invervalId);
  }
  public onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  public fileBrowseHandler(files: any) {
    this.prepareFilesList(files.files);
  }

  public openDocument(doc: DocumentDto) {
    downloadFile(doc.url);
  }

  public isValidDocumentList() {
    if (this.inProgressFiles.length === 0) {
      return false;
    }
    return !this.inProgressFiles.find(file => file.progress < 100);
  }
  public validation() {
    const values: InputUploadValue[] = this.inProgressFiles
      .map(file =>
        file.completed
          ? {
              id: file.completed.id,
              name: file.completed.name ?? '',
              url: file.completed.url,
            }
          : null
      )
      .filter(isNonNullable);

    this.input.confirmValue(values);
  }

  public deleteInProgressFile(name: string) {
    this.inProgressFiles = this.inProgressFiles.filter(file => file.name !== name);
    this._refreshUploadStatus();
  }
  public deleteFile(id: string) {
    this.inProgressFiles = this.inProgressFiles.filter(file => file.completed?.id !== id);
    this._refreshUploadStatus();
  }

  public prepareFilesList(files: File[]) {
    for (const item of files) {
      const inProgressFile: InProgressFile = {
        name: item.name,
        progress: 0,
        completed: null,
      };
      this.inProgressFiles.push(inProgressFile);
      this.uploadStatusChanged.emit(false);

      this._documentsService.addDocument$({ file: item }).subscribe({
        next: data => {
          inProgressFile.progress = 100;
          inProgressFile.completed = data;

          this._refreshUploadStatus();
          if (!this.input.confirmButton) {
            this.validation();
          }
        },
      });
    }
  }

  public async uploadFile() {
    // todo move into a capacitor filesystem service
    const pickFiles = await FilePicker.pickFiles({
      multiple: true,
      types: [
        // pdf
        'application/pdf',
        // word
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword',
        // excel
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        // text
        'text/plain',
      ],
    });

    const files = [];
    for (let file of pickFiles.files) {
      if (!file || !file.blob) continue;

      files.push(this._localToFile(file));
    }
    this.prepareFilesList(files);
  }

  private _refreshUploadStatus() {
    const allComplete = this.inProgressFiles.every(file => file.progress === 100);
    this.uploadStatusChanged.emit(allComplete);
  }

  private _localToFile(file: PickedFile): File {
    return new File([file.blob!], file.name, {
      type: file.mimeType,
    });
  }
}
