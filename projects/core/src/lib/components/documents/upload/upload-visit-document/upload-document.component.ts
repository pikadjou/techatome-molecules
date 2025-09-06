import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { UploadDocumentFormService } from '@ta/files-extended';
import { FormComponent } from '@ta/form-basic';
import { IInputsError, InputBase } from '@ta/form-model';
import { TaEnumerationService, TranslatedEnumeration } from '@ta/services';
import { LayoutModalComponent } from '@ta/ui';

export interface UploadDocumentResult {
  description?: string;
  documentTypeId: number;
}

@Component({
  selector: 'ta-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss'],
  standalone: true,
  imports: [NgIf, LayoutModalComponent, FormComponent],
})
export class UploadDocumentModal implements OnInit {
  public form: InputBase<any>[] = [];
  public error: IInputsError = { status: 0, message: '' };

  public loader = false;

  get fileTypes$(): Observable<TranslatedEnumeration[]> {
    return this._enumTypeService.fetchFileTypes();
  }

  constructor(
    private _enumTypeService: TaEnumerationService,
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
