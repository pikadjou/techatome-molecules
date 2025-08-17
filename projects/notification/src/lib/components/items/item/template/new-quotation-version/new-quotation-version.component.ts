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
export class NewQuotationVersionComponent extends AbstractNotificationTemplateComponent {
  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.quotationVersion) {
      return;
    }
    super.goTo();
    this.sharedService.routing?.quotationVersion({
      projectId: this.extractredirectContext('ProjectId'),
      quotationId: this.extractredirectContext('QuotationId'),
      quotationVersionId: this.extractredirectContext('QuotationVersionId'),
    });
  }
}
