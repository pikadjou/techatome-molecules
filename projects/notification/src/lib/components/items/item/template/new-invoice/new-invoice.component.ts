import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'cam-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
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
