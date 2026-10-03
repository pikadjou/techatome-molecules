import { Component, input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { TranslatePipe } from "@ta/translation";

@Component({
  selector: "ta-form-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [TranslatePipe],
})
export class FormLabelComponent {
  inputModel = input.required<{ label: string; validators: ValidatorFn[] }>({ alias: 'input' });

  withMarginBottom = input<boolean>(true);

  /**
   * `field` intitule un champ de saisie ; `choice` enonce l'option d'une case,
   * d'un radio ou d'un interrupteur — c'est alors du texte courant, pas un
   * intitule, et il se lit a la taille du corps de texte.
   */
  variant = input<"field" | "choice">("field");

  public readonly validators = Validators;
}
