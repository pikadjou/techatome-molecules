import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'ta-to-do-due-today',
  templateUrl: './to-do-due-today.component.html',
  styleUrls: ['./to-do-due-today.component.scss'],
})
export class ToDoDueTodayComponent extends AbstractNotificationTemplateComponent {
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
