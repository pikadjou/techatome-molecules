import { Component, Input, inject, signal } from '@angular/core';

import { CamBaseComponent } from '@ta/utils';
import { Observable, map } from 'rxjs';

import { CamCommunicationsService } from '../../../../services/communications.service';
import { Communication } from '../../../../services/dto/communication';

@Component({
  selector: 'ta-response-to-communication',
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
