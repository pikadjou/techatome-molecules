import { AbstractNotificationTemplateComponent } from "../abstract";
import { IconComponent } from "../../icon/icon.component";
import { ItemComponent } from "../../item.component";
import { NotificationTitleComponent } from "../../title/title.component";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "ta-new-invoice",
  templateUrl: "./new-invoice.component.html",
  styleUrls: ["./new-invoice.component.scss"],
  standalone: true,
  imports: [
    IconComponent,
    ItemComponent,
    NotificationTitleComponent,
    TranslateModule,
  ],
})
export class NewInvoiceComponent extends AbstractNotificationTemplateComponent {
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
