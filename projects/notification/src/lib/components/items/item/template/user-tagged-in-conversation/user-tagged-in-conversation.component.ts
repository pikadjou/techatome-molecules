import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'cam-user-tagged-in-conversation',
  templateUrl: './user-tagged-in-conversation.component.html',
  styleUrls: ['./user-tagged-in-conversation.component.scss'],
})
export class UserTaggedInConversationComponent extends AbstractNotificationTemplateComponent {
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
