import { Component, Input, inject, signal } from '@angular/core';

import { Observable, map } from 'rxjs';

import { CamBaseComponent } from '@camelot/utils';

import { CamCommunicationsService } from '../../../../services/communications.service';
import { Communication } from '../../../../services/dto/communication';

@Component({
  selector: 'cam-response-to-communication',
  templateUrl: './response-to-communication.component.html',
  styleUrls: ['./response-to-communication.component.scss'],
})
export class ResponseToCommunicationComponent extends CamBaseComponent {
  @Input()
  responseToCommunicationId!: string;

  @Input()
  taskId!: string;

  private _communicationService = inject(CamCommunicationsService);

  public responseToCommunication$ = signal<Observable<Communication[]> | null>(null);

  ngOnInit() {
    this.responseToCommunication$.set(
      this._communicationService.communicationByTaskId.get$(this.taskId).pipe(
        map(conversation => {
          return conversation.communications.filter(
            communication => communication.id === this.responseToCommunicationId
          );
        })
      )
    );
  }
}
