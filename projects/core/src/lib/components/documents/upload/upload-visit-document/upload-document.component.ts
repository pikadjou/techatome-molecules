import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { UploadDocumentFormService } from '@ta/files-extended';
import { IInputsError, InputBase } from '@ta/form-model';
import { CamEnumerationService, TranslatedEnumeration } from '@ta/services';
import { Observable } from 'rxjs';

export interface UploadDocumentResult {
  description?: string;
  documentTypeId: number;
}

@Component({
  selector: 'ta-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
})
export class UploadDocumentModal implements OnInit {
  public form: InputBase<any>[] = [];
  public error: IInputsError = { status: 0, message: '' };

  public loader = false;

  get fileTypes$(): Observable<TranslatedEnumeration[]> {
    return this._enumTypeService.fetchFileTypes();
  }

  constructor(
    private _enumTypeService: CamEnumerationService,
    public dialogRef: MatDialogRef<UploadDocumentModal, UploadDocumentResult | null>,
    private _form: UploadDocumentFormService
  ) {}

  ngOnInit() {
    this.form = this._form.getGroupForm({
      description: '',
      documentTypes$: this.fileTypes$,
    });
  }

  public onSaveClick = (values: { description: string; documentType: string }): void => {
    this.dialogRef.close({
      description: values.description,
      documentTypeId: Number(values.documentType),
    });
  };
}
