import { NgIf, NgClass } from '@angular/common';
import { LocalIconComponent } from '@ta/icons';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { InputImages } from '@ta/form-model';
import { FileListComponent } from '@ta/files-basic';
import { ButtonComponent } from '@ta/ui';
import { FileData, pickImages, removeElement } from '@ta/utils';

import { CamAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';
import { InputImageModal } from './modal/input-images-modal.component';

@Component({
selector: 'ta-input-images',
  templateUrl: './input-images.component.html',
  styleUrls: ['./input-images.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, LocalIconComponent, FormLabelComponent, ButtonComponent, FileListComponent],
})
export class InputImagesComponent extends CamAbstractInputComponent<InputImages> implements OnInit {
  get selection(): string[] {
    return this.input.value;
  }

  get fileDataSelection(): FileData[] {
    return this.selection.map(selection => ({
      id: 0,
      type: 'Image',
      url: selection,
    }));
  }

  get isCircularButton(): boolean {
    if (!this.selection) return false;

    return this.selection.length > 0;
  }

  set selection(value: string[]) {
    this.input.formControl?.setValue(value);
  }

  constructor(public dialog: MatDialog) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.input.removeFile$) {
      this._registerSubscription(
        this.input.removeFile$.subscribe(fileData => removeElement(this.selection, fileData.url))
      );
    }
  }

  public async openDialog() {
    if (!this.input.files$) {
      this.selection.push(...(await pickImages()).map(image => image.localUrl!));

      return;
    }

    const dialogRef = this.dialog.open(InputImageModal, {
      data: { input: this.input, selection: this.selection },
    });

    this._registerSubscription(
      dialogRef.afterClosed().subscribe(selection => {
        if (!selection) {
          return;
        }
        this.selection = selection;
      })
    );
  }

  public onFileDeleted(fileData: FileData) {
    this.selection = this.selection.filter(url => url !== fileData.url);
  }
}

export interface DialogData {
  input: InputImages;
  selection: string[];
}
