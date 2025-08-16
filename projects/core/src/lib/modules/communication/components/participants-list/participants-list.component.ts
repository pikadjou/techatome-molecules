import { Component, Input } from '@angular/core';

import { Observable, of } from 'rxjs';

import { UserLogoData } from '@camelot/ui';
import { CamBaseComponent } from '@camelot/utils';

import { CommunicationParticipantExtended } from '../../services/dto/communication';

@Component({
  selector: 'cam-communication-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss'],
})
export class ParticipantsListComponent extends CamBaseComponent {
  @Input()
  conversationParticipants!: CommunicationParticipantExtended[];

  public mapParticipantList(conversationParticipants: CommunicationParticipantExtended[]): Observable<UserLogoData[]> {
    return of(
      conversationParticipants.map(item => {
        if (item.user) {
          return {
            firstName: item.user.firstName,
            lastName: item.user.lastName,
            picture: item.user.picture,
            trigram: item.user.trigram,
          };
        }
        if (item.contact) {
          return {
            firstName: item.contact.firstName,
            lastName: item.contact.lastName,
            trigram: '',
          };
        }
        return {
          firstName: item.email,
          lastName: '',
          trigram: '',
        };
      })
    );
  }
}
