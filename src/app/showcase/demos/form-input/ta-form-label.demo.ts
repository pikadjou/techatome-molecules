import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Validators } from "@angular/forms";

import { FormLabelComponent } from "@ta/form-input";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-form-label-basic",
  imports: [FormLabelComponent],
  template: `
    <ta-form-label [input]="this.optional"></ta-form-label>
    <ta-form-label [input]="this.required"></ta-form-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormLabelBasicExample {
  // `input` attend un simple objet `{ label, validators }`, pas un `InputBase`
  // complet : ce composant est un libellé nu, réutilisé tel quel par plusieurs
  // champs de @ta/form-input (case à cocher, images, logo).
  optional = { label: "Nom", validators: [] };
  required = { label: "Courriel", validators: [Validators.required] };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-form-label-margin",
  imports: [FormLabelComponent],
  template: `
    <ta-form-label [input]="this.model" [withMarginBottom]="true"></ta-form-label>
    <ta-form-label [input]="this.model" [withMarginBottom]="false"></ta-form-label>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaFormLabelMarginExample {
  model = { label: "Adresse", validators: [] };
}

export const DEMO: ComponentDemo = {
  id: "ta-form-label",
  group: "Avancé",
  summary:
    "Libellé de champ avec astérisque automatique, factorisé hors du système `InputBase` et réutilisé par plusieurs composants de saisie internes à @ta/form-input.",
  examples: [
    {
      title: "Libellé simple vs requis",
      description:
        "L'astérisque n'apparaît que si `validators` contient la référence `Validators.required` — le template compare l'identité de la fonction, pas son nom.",
      component: TaFormLabelBasicExample,
    },
    { title: "Marge sous le libellé", component: TaFormLabelMarginExample },
  ],
};
