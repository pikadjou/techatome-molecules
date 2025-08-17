import { FontIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';

import { CommunicationStatus } from '../../services/dto/communication';

@Component({
selector: 'ta-communication-status',
  templateUrl: './communication-status.component.html',
  styleUrls: ['./communication-status.component.scss'],,
  standalone: true,
  imports: [FontIconComponent],
})
export class CommunicationStatusComponent {
  @Input()
  value!: CommunicationStatus;

  public getTranslate() {
    return `communication.status.${CommunicationStatus[this.value ?? CommunicationStatus.Unknown].toLocaleLowerCase()}`;
  }
}
