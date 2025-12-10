import { AbstractNotificationTemplateComponent } from "../abstract";
import { IconComponent } from "../../icon/icon.component";
import { ItemComponent } from "../../item.component";
import { NotificationTitleComponent } from "../../title/title.component";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "ta-new-quotation-version",
  templateUrl: "./new-quotation-version.component.html",
  styleUrls: ["./new-quotation-version.component.scss"],
  standalone: true,
  imports: [
    IconComponent,
    ItemComponent,
    NotificationTitleComponent,
    TranslateModule,
  ],
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
      projectId: this.extractredirectContext("ProjectId"),
      quotationId: this.extractredirectContext("QuotationId"),
      quotationVersionId: this.extractredirectContext("QuotationVersionId"),
    });
  }
}
