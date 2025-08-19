import { AbstractNotificationTemplateComponent } from '../abstract';
import { IconComponent } from '../../icon/icon.component';
import { ItemComponent } from '../../item.component';
import { NotificationTitleComponent } from '../../title/title.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'ta-task-due-today',
  templateUrl: './task-due-today.component.html',
  styleUrls: ['./task-due-today.component.scss'],
  standalone: true,
  imports: [
    IconComponent,
    ItemComponent,
    NotificationTitleComponent,
    TranslateModule
  ],
})
export class TaskDueTodayComponent extends AbstractNotificationTemplateComponent {
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
