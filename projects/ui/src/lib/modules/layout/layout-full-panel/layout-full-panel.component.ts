import { Component, EventEmitter, input, Output } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { TaBaseComponent } from "@ta/utils";

import { TitleComponent } from "../../../components/ui/title/title.component";
import { LayoutHeaderComponent } from "../layout-header/layout-header.component";
import { LayoutTitleComponent } from "../layout-title/layout-title.component";
import { TaTranslationLayout } from "../translation.service";

@Component({
  selector: "ta-layout-full-panel",
  templateUrl: "./layout-full-panel.component.html",
  styleUrls: ["./layout-full-panel.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    TranslateModule,
    LayoutTitleComponent,
    LayoutHeaderComponent,
    TitleComponent,
  ],
})
export class LayoutFullPanelComponent extends TaBaseComponent {
  width = input<string>("400px");

  title = input<string>("");

  @Output()
  closeEvent = new EventEmitter();

  constructor() {
    super();
    TaTranslationLayout.getInstance();
  }

  public askClose() {
    this.closeEvent.emit();
  }
}
