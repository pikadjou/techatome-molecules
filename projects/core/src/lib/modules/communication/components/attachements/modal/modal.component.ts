import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { InputUpload, InputUploadValue } from '@ta/form-model';
import { CamBaseModal } from '@ta/utils';

export interface AttachmentsResult {
  result: InputUploadValue[];
}

@Component({
selector: '',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],,
  standalone: true,
})
export class AttachmentsModal extends CamBaseModal {
  public uploadInput = new InputUpload({
    confirmButton: true,
  });

  constructor(
    public dialogRef: MatDialogRef<AttachmentsModal, AttachmentsResult | null>,
    @Inject(MAT_DIALOG_DATA) public data: { attachments: InputUploadValue[] }
  ) {
    super();
    this.dialogRef.addPanelClass('classic-modal');
    this.uploadInput.createFormControl();
    this.uploadInput.value = data.attachments;
    this.uploadInput.changeValue$.subscribe({
      next: ids => this.onSave(ids),
    });
  }
  override ngOnDestroy(): void {
    this.uploadInput.destroy();
  }

  public onSave(result: InputUploadValue[]) {
    this.dialogRef.close({
      result,
    });
  }
}
