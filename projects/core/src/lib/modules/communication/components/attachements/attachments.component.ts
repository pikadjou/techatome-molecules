import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

import { InputUploadValue } from '@ta/form-model';
import { CamDocumentsService } from '@ta/services';
import { CamAbstractComponent } from '@ta/utils';

import { AttachmentsModal, AttachmentsResult } from './modal/modal.component';

@Component({
selector: 'ta-communication-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss'],,
  standalone: true,
  imports: [NgFor],
})
export class AttachmentsComponent extends CamAbstractComponent implements OnChanges {
  @Input()
  preSetAttachments: string[] = [];

  @Output()
  attachments = new EventEmitter<InputUploadValue[]>();

  @ViewChild('uploadTemplate', { read: TemplateRef })
  uploadTemplate!: TemplateRef<void>;

  public attachmentsValue: InputUploadValue[] = [];

  private readonly _documentsService = inject(CamDocumentsService);

  constructor(private _dialog: MatDialog) {
    super();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['preSetAttachments'] &&
      this.preSetAttachments &&
      this.preSetAttachments.length > 0 &&
      changes['preSetAttachments'].previousValue !== changes['preSetAttachments'].currentValue
    ) {
      this._updateAttachments(
        this._documentsService.getDocuments(this.preSetAttachments)?.map(doc => ({
          id: doc.id,
          name: doc.name,
          url: doc.url,
        })) ?? []
      );
    }
  }

  public open() {
    this._registerSubscription(
      this._dialog
        .open(AttachmentsModal, { data: { attachments: this.attachmentsValue } })
        .afterClosed()
        .subscribe((result: AttachmentsResult | null) => {
          if (!result) {
            return;
          }
          this._updateAttachments(result.result);
        })
    );
  }

  private _updateAttachments(attachments: InputUploadValue[]) {
    this.attachments.emit(attachments);
    this.attachmentsValue = attachments;
  }
}
