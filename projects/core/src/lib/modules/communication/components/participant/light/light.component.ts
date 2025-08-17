import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaBaseComponent, fullName } from '@ta/utils';

import { CommunicationParticipant, CommunicationParticipantExtended } from '../../../services/dto/communication';

@Component({
selector: 'ta-communication-participant-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],,
  standalone: true,
  imports: [NgFor],
})
export class LightComponent extends TaBaseComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  participants!: CommunicationParticipant[];

  readonly fullName = fullName;

  public getFullName(participant: CommunicationParticipant) {
    const conversationParticipant = this.conversationParticipants.find(p => {
      if (participant.userId && p.userId === participant.userId) {
        return true;
      }
      if (participant.contactId && p.contactId === participant.contactId) {
        return true;
      }
      return false;
    });

    if (!conversationParticipant) {
      return participant.email;
    }
    if (conversationParticipant.user) {
      return fullName({
        firstName: conversationParticipant.user.firstName,
        name: conversationParticipant.user.lastName,
      });
    }
    if (conversationParticipant.contact) {
      return fullName({
        firstName: conversationParticipant.contact.firstName,
        name: conversationParticipant.contact.lastName,
      });
    }
    return participant.email;
  }
}
