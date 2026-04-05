import { Component, input, output } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { TaBaseComponent } from "@ta/utils";

import { ButtonComponent } from "../../../components/ui/button/button.component";
import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
  standalone: true,
  imports: [TranslateModule, FontIconComponent, ButtonComponent],
})
export class ErrorComponent extends TaBaseComponent {
  message = input<string>("");
  code = input<number>(200);
  showRetry = input<boolean>(true);
  retryLabel = input<string>("ui.container.error.retry");

  retry = output<void>();

  onRetry(): void {
    this.retry.emit();
  }

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }
}
