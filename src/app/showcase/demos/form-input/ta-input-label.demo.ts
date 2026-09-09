import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LabelComponent } from "@ta/form-input";
import { InputLabel } from "@ta/form-model";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-input-label-text",
  imports: [LabelComponent],
  template: ` <ta-input-label [input]="this.model" [standalone]="true"></ta-input-label> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputLabelTextExample {
  // Sans `level`, le composant rend un texte simple (`ta-text`) plutôt qu'un titre.
  model = new InputLabel({ key: "note", label: "Merci de vérifier les informations avant de valider.", icon: "edit" });
}

@Component({
  standalone: true,
  selector: "app-ex-ta-input-label-title",
  imports: [LabelComponent],
  template: ` <ta-input-label [input]="this.model" [standalone]="true"></ta-input-label> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaInputLabelTitleExample {
  // `level` bascule le rendu vers `ta-title` ; `required` ajoute un astérisque.
  model = new InputLabel({ key: "section", label: "Coordonnées", level: 3, required: true });
}

export const DEMO: ComponentDemo = {
  id: "ta-input-label",
  group: "Avancé",
  summary:
    "Élément de formulaire sans valeur, piloté par un modèle `InputLabel` : texte simple avec icône, ou titre de section selon que `level` est défini.",
  examples: [
    { title: "Texte simple avec icône", component: TaInputLabelTextExample },
    { title: "Titre de section requis", component: TaInputLabelTitleExample },
  ],
  notes:
    "`InputLabel.createFormControl()` est surchargé pour ne rien faire : ce n'est pas un champ de saisie, il ne produit jamais de `FormControl` ni de valeur.",
};
