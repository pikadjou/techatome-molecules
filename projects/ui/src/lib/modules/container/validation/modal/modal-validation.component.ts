import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ModalParameter } from '../common-modal';

@Component({
  selector: '',
  templateUrl: './modal-validation.component.html',
  styleUrls: ['./modal-validation.component.scss'],
})
export class ValidationModal {
  public get title(): string {
    return this.data?.title ?? 'validation.modal.title';
  }

  public get subtitle(): string {
    return this.data?.subtitle ?? 'validation.modal.content';
  }

  constructor(
    public dialogRef: MatDialogRef<ValidationModal>,
    @Inject(MAT_DIALOG_DATA) public data?: ModalParameter
  ) {}

  public onNoClick(): void {
    this.dialogRef.close(false);
  }
  public onYesClick(): void {
    this.dialogRef.close(true);
  }
}
