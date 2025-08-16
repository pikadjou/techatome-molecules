import { Component, Input, inject } from '@angular/core';

import { KeyValue } from '@ta/server';

import { CamNotificationDataService } from '../../../../services/data.service';
import { NotificationDto } from '../../../../services/dto/notification';
import { CamNotificationSharedService } from '../../../../services/shared.service';

@Component({ template: '' })
export abstract class AbstractNotificationTemplateComponent {
  @Input()
  notification!: NotificationDto;

  public sharedService = inject(CamNotificationSharedService);
  public dataService = inject(CamNotificationDataService);

  public goTo() {
    this.dataService.isRead$(this.notification.id).subscribe();
  }

  public getTranslation() {
    return (<KeyValue[]>this.notification.context).reduce<{
      [index: string]: string | number;
    }>((acc, item) => {
      acc[item.key as string] = item.value;
      return acc;
    }, {});
  }

  public extractContext(key: string) {
    return (<KeyValue[]>this.notification.context).find(item => item.key === key)?.value ?? '';
  }

  public extractredirectContext(key: string) {
    return (<KeyValue[]>this.notification.redirectContext).find(item => item.key === key)?.value ?? '';
  }
}
