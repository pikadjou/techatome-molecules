import { Component, EventEmitter, Output, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { ButtonComponent } from "../../../../components/ui/button/button.component";
import { TextComponent } from "../../../../components/ui/text/text.component";
import { TaModalComponent } from "../../../layout/modal/modal.component";
import { TaBaseComponent } from "@ta/utils";
import { ModalParameter } from "../common-modal";
import { TaTranslationUI } from "../../../../translation.service";

@Component({
  selector: "ta-validation-modal",
  templateUrl: "./modal-validation.component.html",
  styleUrls: ["./modal-validation.component.scss"],
  standalone: true,
  imports: [TranslateModule, ButtonComponent, TextComponent, TaModalComponent],
})
export class ValidationModal extends TaBaseComponent {
  open = input.required<boolean>();
  params = input<ModalParameter | undefined>(undefined);

  @Output() validated = new EventEmitter<void>();
  @Output() closeEvent = new EventEmitter<void>();

  public get title(): string {
    return this.params()?.title ?? "validation.modal.title";
  }

  public get subtitle(): string {
    return this.params()?.subtitle ?? "validation.modal.content";
  }

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public onNoClick(): void {
    this.closeEvent.emit();
  }

  public onYesClick(): void {
    this.validated.emit();
    this.closeEvent.emit();
  }
}
