import { Component, EventEmitter, Output, computed, input, signal } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { TaBaseComponent } from "@ta/utils";

import { ButtonComponent } from "../../../../components/ui/button/button.component";
import { TextComponent } from "../../../../components/ui/text/text.component";
import { TaModalComponent } from "../../../layout/modal/modal.component";
import { TaTranslationUI } from "../../../../translation.service";

/**
 * Demande confirmation avant de laisser passer l'action qu'il enveloppe.
 *
 * `modal` interrompt : c'est la forme qui convient quand la conséquence dépasse
 * ce qui est à l'écran. `inline` remplace le déclencheur par un encart de
 * confirmation, et garde visible ce sur quoi on agit — la ligne, la carte, la
 * personne — là où une modale l'aurait recouvert.
 */
@Component({
  selector: "ta-container-validation",
  templateUrl: "./container-validation.component.html",
  styleUrls: ["./container-validation.component.scss"],
  standalone: true,
  imports: [ButtonComponent, TextComponent, TaModalComponent, TranslateModule],
})
export class ContainerValidationComponent extends TaBaseComponent {
  disabled = input<boolean>(false);
  title = input<string>("validation.modal.title");
  subtitle = input<string>("validation.modal.content");

  variant = input<"modal" | "inline">("modal");

  @Output()
  validated = new EventEmitter();

  public isModalOpen = signal(false);

  readonly isInlineOpen = computed(
    () => this.variant() === "inline" && this.isModalOpen()
  );

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
