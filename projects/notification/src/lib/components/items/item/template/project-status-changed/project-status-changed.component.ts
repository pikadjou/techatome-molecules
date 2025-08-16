import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'ta-notification-project-status-changed',
  templateUrl: './project-status-changed.component.html',
  styleUrls: ['./project-status-changed.component.scss'],
})
export class ProjectStatusChangedComponent extends AbstractNotificationTemplateComponent {
  public template = this.sharedService.projectStatusTemplate;
  get projectStatus() {
    return Number(this.extractContext('ProjectStatus'));
  }

  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.project) {
      return;
    }
    super.goTo();
    this.sharedService.routing.project({
      projectId: this.extractredirectContext('ProjectId'),
    });
  }
}
