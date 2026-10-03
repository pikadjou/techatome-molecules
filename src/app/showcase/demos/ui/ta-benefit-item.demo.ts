import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BenefitItemComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-benefit-item-types",
  imports: [BenefitItemComponent],
  template: `
    <ta-benefit-item type="success" text="Dossier complet, aucune action requise."></ta-benefit-item>
    <ta-benefit-item type="warning" text="Un document est encore attendu."></ta-benefit-item>
    <ta-benefit-item type="alert" text="La demande a été refusée."></ta-benefit-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBenefitItemTypesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-benefit-item",
  group: "Affichage",
  summary: "Ligne à icône et bordure colorée pour signaler un statut, sur fond neutre.",
  examples: [
    {
      title: "Types",
      layout: "stack",
      description:
        "`type` (`ColorType`, @ta/styles) pilote l'icône (`icon()` : check pour success, warning pour warning, error pour alert) et la classe CSS du conteneur (`cssClasses()` renvoie `[type]`). `benefit-item.component.scss` ne définit que `.success`, `.warning` et `.error` — pas `.alert`, la seule valeur de `ColorType` proche d'une erreur : avec `type=\"alert\"`, l'icône affiche bien le glyphe `error`, mais ni la bordure colorée ni la couleur d'icône ne s'appliquent, faute de classe `.alert` correspondante. Vérifié en confrontant `icon()`/`cssClasses()` au SCSS.",
      component: TaBenefitItemTypesExample,
    },
  ],
  notes:
    "Les autres valeurs de `ColorType` (`default`, `secondary`, `purple`, `new`) ne sont pas démontrées : `icon()` les fait toutes retomber sur le glyphe `check`, comme `success`, sans qu'aucune classe SCSS ne leur corresponde non plus.",
};
