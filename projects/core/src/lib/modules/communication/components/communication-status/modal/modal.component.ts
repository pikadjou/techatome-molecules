import {Component, Inject, inject, OnInit} from '@angular/core';
import {CamContainerModule, CamLayoutModule, CamUiModule} from "@camelot/ui";
import {AsyncPipe, NgIf} from "@angular/common";
import {CamCommunicationsService} from "../../../services/communications.service";
import {CamBaseModal} from "@camelot/utils";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpErrorResponse} from "@angular/common/http";
import {TranslatePipe} from "@ngx-translate/core";
import {CamIconsModule} from "@camelot/icons";

@Component({
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    TranslatePipe,
    CamContainerModule,
    CamUiModule,
    CamIconsModule,
    CamLayoutModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class CommunicationErrorModal extends CamBaseModal implements OnInit {

  private readonly _communicationId: string;

  private _conversationService = inject(CamCommunicationsService);

  get communicationError$(){
    return this._conversationService.communicationErrorsByCommunicationId.get$(this._communicationId);
  }

  constructor(public dialogRef: MatDialogRef<CommunicationErrorModal, null>,
              @Inject(MAT_DIALOG_DATA) public data: { communicationId: string; }) {
    super();
    this._communicationId = data.communicationId;
  }

  ngOnInit() {
    this.requestState.asked();
    this._registerSubscription(
      this._conversationService
        .fetchConversationError$(this._communicationId)
        .subscribe({
          complete: () => this.requestState.completed(),
          error: (error: HttpErrorResponse) => {
            this.requestState.onError(error.status, error.statusText);
          },
        })
    );
  }

}
