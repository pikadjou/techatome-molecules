import { Component } from '@angular/core';

import { AbstractNotificationTemplateComponent } from '../abstract';

@Component({
  selector: 'cam-new-quotation-version',
  templateUrl: './new-quotation-version.component.html',
  styleUrls: ['./new-quotation-version.component.scss'],
})
export class NewQuotationVersionComponent extends AbstractNotificationTemplateComponent {
  override goTo() {
    if (
      !this.sharedService.routing ||
      !this.sharedService.routing.quotationVersion
    ) {
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
