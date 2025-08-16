import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import {
  Communication,
  CommunicationParticipantExtended,
  CommunicationStatus,
  CommunicationType,
} from '../../services/dto/communication';
import { CommunicationErrorModal } from '../communication-status/modal/modal.component';

@Component({
  selector: 'ta-communication-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss'],
})
export class MessageContainerComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  communication!: Communication;

  @Input()
  taskId!: string;

  @Output()
  askReply: EventEmitter<{ communication: Communication; isForward: boolean }> = new EventEmitter();

  readonly CommunicationType = CommunicationType;
  readonly CommunicationStatus = CommunicationStatus;

  constructor(private _dialog: MatDialog) {}

  public open() {
    if (this.communication.id) {
      this._dialog.open(CommunicationErrorModal, { data: { communicationId: this.communication.id } });
    }
  }
}
