import { AsyncPipe, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TranslatePipe } from '@ngx-translate/core';
import { CamIconsModule } from '@ta/icons';
import { CamContainerModule, CamLayoutModule, CamUiModule } from '@ta/ui';
import { CamBaseModal } from '@ta/utils';

import { CamCommunicationsService } from '../../../services/communications.service';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe, TranslatePipe, CamContainerModule, CamUiModule, CamIconsModule, CamLayoutModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class CommunicationErrorModal extends CamBaseModal implements OnInit {
  private readonly _communicationId: string;

  private _conversationService = inject(CamCommunicationsService);

  get communicationError$() {
    return this._conversationService.communicationErrorsByCommunicationId.get$(this._communicationId);
  }

  constructor(
    public dialogRef: MatDialogRef<CommunicationErrorModal, null>,
    @Inject(MAT_DIALOG_DATA) public data: { communicationId: string }
  ) {
    super();
    this._communicationId = data.communicationId;
  }

  ngOnInit() {
    this.requestState.asked();
    this._registerSubscription(
      this._conversationService.fetchConversationError$(this._communicationId).subscribe({
        complete: () => this.requestState.completed(),
        error: (error: HttpErrorResponse) => {
          this.requestState.onError(error.status, error.statusText);
        },
      })
    );
  }
}
