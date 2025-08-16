import { Component, Input } from '@angular/core';

import { CommunicationType } from '../../services/dto/communication';

@Component({
  selector: 'cam-communication-type',
  templateUrl: './communication-type.component.html',
  styleUrls: ['./communication-type.component.scss'],
})
export class CommunicationTypeComponent {
  @Input()
  value!: CommunicationType;

  public getTranslate() {
    return `communication.type.${CommunicationType[
      this.value ?? CommunicationType.Unknown
    ].toLocaleLowerCase()}`;
  }
}
