import { AbstractNotificationTemplateComponent } from "../abstract";
import { IconComponent } from "../../icon/icon.component";
import { ItemComponent } from "../../item.component";
import { NotificationTitleComponent } from "../../title/title.component";
import { NgIf, NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { KeyValue } from "@ta/server";

@Component({
  selector: "ta-invoice-payment-status-changed",
  templateUrl: "./invoice-payment-status-changed.component.html",
  styleUrls: ["./invoice-payment-status-changed.component.scss"],
  standalone: true,
  imports: [
    IconComponent,
    ItemComponent,
    NgIf,
    NgTemplateOutlet,
    NotificationTitleComponent,
    TranslateModule,
  ],
})
export class InvoicePaymentStatusChangedComponent extends AbstractNotificationTemplateComponent {
  public template = this.sharedService.paymentStatusTemplate;
  get paymentStatus() {
    return (
      (<KeyValue[]>this.notification().context).find(
        (item) => item.key === "PaymentStatus"
      )?.value ?? 0
    );
  }
  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.invoice) {
      return;
    }
    super.goTo();
    this.sharedService.routing?.invoice({
      projectId: this.extractredirectContext("ProjectId"),
      invoiceId: this.extractredirectContext("InvoiceId"),
    });
  }
}
