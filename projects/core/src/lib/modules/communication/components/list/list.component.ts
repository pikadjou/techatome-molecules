import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Communication, CommunicationParticipantExtended, CommunicationType } from '../../services/dto/communication';

@Component({
selector: 'ta-message-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],,
  standalone: true,
  imports: [NgFor],
})
export class ListComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  @Input()
  list!: Communication[];

  @Input()
  limit: number | -1 = -1;

  @Input()
  taskId!: string;

  @Input()
  readonly: boolean = false;

  @Output()
  askReply: EventEmitter<{ communication: Communication; isForward: boolean }> = new EventEmitter();

  readonly CommunicationType = CommunicationType;

  get limitlist() {
    if (this.limit === -1) {
      return this.list;
    }
    return this.list.slice(this.list.length - 1 - this.limit, this.list.length - 1);
  }

  public groupedMessages: { date: string; messages: Communication[] }[] = [];

  ngOnChanges() {
    this.updateGroupedMessages();
  }

  private updateGroupedMessages() {
    this.groupedMessages = [];
    this.limitlist.forEach(communication => {
      const date = new Date(communication.createdTime).toDateString();
      const existingGroup = this.groupedMessages.find(group => group.date === date);

      if (existingGroup) {
        existingGroup.messages.push(communication);
      } else {
        this.groupedMessages.push({ date, messages: [communication] });
      }
    });
  }
}
