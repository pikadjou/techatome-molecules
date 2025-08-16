import { Component } from '@angular/core';

import { KeyValue } from '@camelot/server';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'cam-invoice-payment-status-changed',
  templateUrl: './invoice-payment-status-changed.component.html',
  styleUrls: ['./invoice-payment-status-changed.component.scss'],
})
export class InvoicePaymentStatusChangedComponent extends AbstractNotificationTemplateComponent {
  public template = this.sharedService.paymentStatusTemplate;
  get paymentStatus() {
    return (
      (<KeyValue[]>this.notification.context).find(
        (item) => item.key === 'PaymentStatus'
      )?.value ?? 0
    );
  }
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
