import { NgTemplateOutlet } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { CamFilesBasicModule } from '@ta/files-basic';
import { CamFormInputsModule } from '@ta/form-input';
import { InputUpload, InputUploadValue } from '@ta/form-model';
import { CamMenuModule, FilterHelper, Menu } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { CamContainerModule, CamLayoutModule, CamUiModule } from '@ta/ui';
import { CamBaseModal, CamDirectivePipeModule } from '@ta/utils';

import { AttachmentsResult } from '../../attachements/modal/modal.component';

export enum EDocumentDetailMenuKey {
  uploaded = 'uploaded',
  communication = 'communication',
  task = 'task',
  project = 'project',
}

export enum EDocumentType {
  newDocuments = 'newDocuments',
  linkedDocuments = 'linkedDocuments',
}

@Component({
  selector: 'ta-conversation-attachments-modal',
  standalone: true,
  imports: [
    CamFormInputsModule,
    CamContainerModule,
    CamDirectivePipeModule,
    CamFilesBasicModule,
    CamMenuModule,
    CamUiModule,
    NgTemplateOutlet,
    TranslatePipe,
    CamLayoutModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ConversationAttachmentsModal extends CamBaseModal {
  public uploadInput = new InputUpload({
    confirmButton: false,
  });

  public allUploadsCompleted = signal(true);

  public filterHelper = new FilterHelper([
    {
      label: 'communication.documents.detail.menu.' + EDocumentDetailMenuKey.uploaded,
      defaultOpen: true,
      order: 1,
    },
    {
      label: 'communication.documents.detail.menu.' + EDocumentDetailMenuKey.communication,
      defaultOpen: false,
      order: 2,
    },
    {
      label: 'communication.documents.detail.menu.' + EDocumentDetailMenuKey.task,
      defaultOpen: false,
      order: 3,
    },
    {
      label: 'communication.documents.detail.menu.' + EDocumentDetailMenuKey.project,
      defaultOpen: false,
      order: 4,
    },
  ]);

  public menu: Menu = this.filterHelper.getMenu();

  public documentType = EDocumentType.linkedDocuments;

  public EDocumentDetailMenuKey = EDocumentDetailMenuKey;
  public EDocumentType = EDocumentType;

  readonly documentsIds: {
    task: string[];
    project: string[];
    communication: string[];
  };

  readonly documentsSelected: {
    task: InputUploadValue[];
    project: InputUploadValue[];
    communication: InputUploadValue[];
  } = {
    task: [],
    project: [],
    communication: [],
  };

  get selectedDocuments() {
    return [
      ...this.documentsSelected.communication,
      ...this.documentsSelected.project,
      ...this.documentsSelected.task,
      ...this.uploadInput.value,
    ];
  }
  constructor(
    public dialogRef: MatDialogRef<ConversationAttachmentsModal, AttachmentsResult | null>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      attachments: InputUploadValue[];
      documentsIds: { task: string[]; project: string[]; communication: string[] };
    }
  ) {
    super();
    this.dialogRef.addPanelClass('classic-modal');
    this.documentsIds = data.documentsIds;
    this.documentsSelected = {
      communication: data.attachments.filter(a => data.documentsIds.communication.includes(a.id)),
      task: data.attachments.filter(a => data.documentsIds.task.includes(a.id)),
      project: data.attachments.filter(a => data.documentsIds.project.includes(a.id)),
    };
    this.uploadInput.value = data.attachments.filter(
      a =>
        !data.documentsIds.communication.includes(a.id) &&
        !data.documentsIds.task.includes(a.id) &&
        !data.documentsIds.project.includes(a.id)
    );
  }

  public updateUploadStatus(status: any) {
    this.allUploadsCompleted.set(status);
  }

  public onDocumentSelectedChange =
    (key: keyof typeof this.documentsSelected) => (updatedValues: InputUploadValue[]) => {
      this.documentsSelected[key] = updatedValues;
    };

  public removedUploadDocument(removedId: string) {
    this.uploadInput.value = this.uploadInput.value.filter(v => v.id !== removedId);
  }
  public switchView(type: EDocumentType) {
    this.documentType = type;
  }

  public confirm() {
    if (this.documentType === this.EDocumentType.newDocuments) {
      this.switchView(this.EDocumentType.linkedDocuments);
      return;
    }
    this.dialogRef.close({
      result: this.selectedDocuments,
    });
  }

  public close() {
    if (this.documentType === this.EDocumentType.newDocuments) {
      this.switchView(this.EDocumentType.linkedDocuments);
      return;
    }
    this.dialogRef.close();
  }

  public extractInputUploadValueId(list: InputUploadValue[]) {
    return list.map(e => e.id);
  }
}
