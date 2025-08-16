import { Component, Input, inject } from '@angular/core';

import { fullName } from '@ta/utils';

import { CommunicationParticipantExtended } from '../../../../../services/dto/communication';
import { CamSharedCommunicationsService } from '../../../../../services/shared.service';

@Component({
  selector: '',
  template: '',
})
export class SwitchCaseBaseComponent<T> {
  @Input()
  case!: T;

  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  readonly Number = Number;
  readonly fullName = fullName;
  readonly sharedService = inject(CamSharedCommunicationsService);

  public getConversationParticipant(id: string) {
    const find = this.conversationParticipants.find(p => {
      if (p.userId === id) {
        return true;
      }
      if (p.contactId === id) {
        return true;
      }
      return false;
    });

    if (!find) {
      return fullName({ firstName: '', name: '' });
    }
    if (find.user) {
      return fullName({
        firstName: find.user.firstName,
        name: find.user.lastName,
      });
    }
    if (find.contact) {
      return fullName({
        firstName: find.contact.firstName,
        name: find.contact.lastName,
      });
    }
    return fullName({ firstName: '', name: '' });
  }
}
