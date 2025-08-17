import { AbstractNotificationTemplateComponent } from '../abstract';
import { IconComponent } from '../icon/icon.component';
import { ItemComponent } from '../item/item.component';
import { TitleComponent } from '../title/title.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

    IconComponent,
    ItemComponent,
    TitleComponent,
    TranslateModule
  ],
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
