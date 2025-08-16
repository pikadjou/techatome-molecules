import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CamBaseModal, FileData, TemporaryFile, pickImages } from '@ta/utils';
import { map } from 'rxjs';

import { DialogData } from '../input-images.component';

@Component({
  selector: '',
  styleUrls: ['./input-images-modal.component.scss'],
  templateUrl: './input-images-modal.component.html',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class InputImageModal extends CamBaseModal implements OnInit {
  public selection: string[] = [];

  public tempFiles = new TemporaryFile();

  constructor(
    public dialogRef: MatDialogRef<InputImageModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    super();

    this.dialogRef.addPanelClass(['full-screen-modal', 'forced']);
    this.selection = this.data.selection;
  }

  ngOnInit() {
    if (this.data.input.files$) {
      this._registerSubscription(this.data.input.files$.subscribe(() => this.tempFiles.removeAll()));
    }
  }

  public getPics$() {
    return this.data.input.files$?.pipe(
      map(files =>
        files.map(file => ({
          ...file,
          isSelected: this.selection.includes(file.url),
        }))
      )
    );
  }
  public onFileSelected(file: FileData) {
    if (this.selection.includes(file.url)) {
      this.selection = this.selection.filter(url => file.url !== url);
      return;
    }
    this.selection = [...this.selection, file.url];
  }
  public uploadPics = async () => {
    const pics = await pickImages();
    if (this.data.input.update) {
      this.tempFiles.addFiles(pics);
      this.data.input.update(pics);
    }
  };
  public selected = () => {
    this.dialogRef.close(this.selection);
  };
}
