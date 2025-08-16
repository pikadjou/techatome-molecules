import { Component, Input } from '@angular/core';

import { WysiswgBlockData } from '@camelot/wysiswyg';

import {
  Communication,
  CommunicationParticipantExtended,
} from '../../../services/dto/communication';

@Component({
  selector: 'cam-communication-message-chat',
  templateUrl: './message-chat.component.html',
  styleUrls: ['./message-chat.component.scss'],
})
export class MessageChatComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  communication!: Communication;

  public getBody(): WysiswgBlockData[] {
    return JSON.parse(this.communication.body);
  }
}
