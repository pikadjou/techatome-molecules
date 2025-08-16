import { Component, Input } from '@angular/core';

import { Communication, CommunicationParticipantExtended } from '../../../services/dto/communication';

@Component({
  selector: 'ta-communication-message-mail',
  templateUrl: './message-mail.component.html',
  styleUrls: ['./message-mail.component.scss'],
})
export class MessageMailComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  communication!: Communication;

  @Input()
  taskId!: string;

  public expand = false;
  public showFullText: boolean = false;
  public showResponsteToCommunication: boolean = false;
}
