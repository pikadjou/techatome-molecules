import { Component, EventEmitter, Output, input, signal } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { ButtonComponent } from "../../../../components/ui/button/button.component";
import { TextComponent } from "../../../../components/ui/text/text.component";
import { TaModalComponent } from "../../../layout/modal/modal.component";
import { TaTranslationUI } from "../../../../translation.service";
import { TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-container-validation",
  templateUrl: "./container-validation.component.html",
  standalone: true,
  imports: [ButtonComponent, TextComponent, TaModalComponent, TranslateModule],
})
export class ContainerValidationComponent extends TaBaseComponent {
  disabled = input<boolean>(false);
  title = input<string>("validation.modal.title");
  subtitle = input<string>("validation.modal.content");

  @Output()
  validated = new EventEmitter();

  public isModalOpen = signal(false);

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public openModal(): void {
    if (this.disabled()) return;
    this.isModalOpen.set(true);
  }

  public onNoClick(): void {
    this.isModalOpen.set(false);
  }

  public onYesClick(): void {
    this.isModalOpen.set(false);
    this.validated.emit();
  }
}
