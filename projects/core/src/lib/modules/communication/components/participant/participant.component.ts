import { Component, Input } from '@angular/core';

import { fullName } from '@camelot/utils';

import {
  CommunicationParticipant,
  CommunicationParticipantExtended,
} from '../../services/dto/communication';

@Component({
  selector: 'cam-communication-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss'],
})
export class ParticipantComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  participant!: CommunicationParticipant;

  get conversationParticipant() {
    return this.conversationParticipants.find((p) => {
      if (this.participant.userId && p.userId === this.participant.userId) {
        return true;
      }
      if (
        this.participant.contactId &&
        p.contactId === this.participant.contactId
      ) {
        return true;
      }
      return false;
    });
  }
  readonly fullName = fullName;
}
