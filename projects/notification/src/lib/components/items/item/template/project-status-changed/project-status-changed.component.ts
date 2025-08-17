import { AbstractNotificationTemplateComponent } from '../abstract';
import { IconComponent } from '../icon/icon.component';
import { ItemComponent } from '../item/item.component';
import { TitleComponent } from '../title/title.component';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

    IconComponent,
    ItemComponent,
    NgIf,
    TitleComponent,
    TranslateModule
  ],
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
