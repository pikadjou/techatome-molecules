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
export class NewInvoiceComponent extends AbstractNotificationTemplateComponent {
  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.invoice) {
      return;
    }
    super.goTo();
    this.sharedService.routing?.invoice({
      projectId: this.extractredirectContext('ProjectId'),
      invoiceId: this.extractredirectContext('InvoiceId'),
    });
  }
}
