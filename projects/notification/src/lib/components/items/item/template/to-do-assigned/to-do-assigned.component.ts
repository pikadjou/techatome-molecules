import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'cam-to-do-assigned',
  templateUrl: './to-do-assigned.component.html',
  styleUrls: ['./to-do-assigned.component.scss'],
})
export class ToDoAssignedComponent extends AbstractNotificationTemplateComponent {
  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.task) {
      return;
    }
    super.goTo();
    this.sharedService.routing?.task({
      taskId: this.extractredirectContext('TaskId'),
    });
  }
}
