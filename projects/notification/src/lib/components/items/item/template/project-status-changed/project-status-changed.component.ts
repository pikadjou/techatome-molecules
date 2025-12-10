import { AbstractNotificationTemplateComponent } from "../abstract";
import { IconComponent } from "../../icon/icon.component";
import { ItemComponent } from "../../item.component";
import { NotificationTitleComponent } from "../../title/title.component";
import { NgIf, NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "ta-notification-project-status-changed",
  templateUrl: "./project-status-changed.component.html",
  styleUrls: ["./project-status-changed.component.scss"],
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
export class ProjectStatusChangedComponent extends AbstractNotificationTemplateComponent {
  public template = this.sharedService.projectStatusTemplate;
  get projectStatus() {
    return Number(this.extractContext("ProjectStatus"));
  }

  override goTo() {
    if (!this.sharedService.routing || !this.sharedService.routing.project) {
      return;
    }
    super.goTo();
    this.sharedService.routing.project({
      projectId: this.extractredirectContext("ProjectId"),
    });
  }
}
