import { CommonModule } from '@angular/common';
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
import { MatDialog } from '@angular/material/dialog';

import { InputUploadValue } from '@camelot/form-model';
import { CamDocumentsService } from '@camelot/services';
import { CamUiModule } from '@camelot/ui';
import { CamAbstractComponent } from '@camelot/utils';

import { AttachmentsResult } from '../attachements/modal/modal.component';
import { ConversationAttachmentsModal } from './modal/modal.component';

@Component({
  selector: 'cam-communication-conversation-attachments',
  standalone: true,
  templateUrl: './conversation-attachments.component.html',
  imports: [CommonModule, CamUiModule],
  styleUrl: './conversation-attachments.component.scss',
})
export class ConversationAttachmentsComponent extends CamAbstractComponent implements OnChanges {
  @Input()
  preSetAttachments: string[] = [];

  @Input()
  documentsIds!: {
    task: string[];
    project: string[];
    communication: string[];
  };

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
        .open(ConversationAttachmentsModal, {
          data: { attachments: this.attachmentsValue, documentsIds: this.documentsIds },
        })
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
