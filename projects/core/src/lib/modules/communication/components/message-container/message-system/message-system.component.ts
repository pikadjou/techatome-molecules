import { Component, Input } from '@angular/core';

import { Communication, CommunicationParticipantExtended } from '../../../services/dto/communication';
import { SwitchCases } from '../../../services/dto/switch-cases';

@Component({
selector: 'ta-communication-message-system',
  templateUrl: './message-system.component.html',
  styleUrls: ['./message-system.component.scss'],,
  standalone: true,
})
export class MessageSystemComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  communication!: Communication;

  public getBody(): SwitchCases {
    return JSON.parse(this.communication.body);
  }
}
