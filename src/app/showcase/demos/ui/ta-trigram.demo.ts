import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TrigramComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-trigram-values",
  imports: [TrigramComponent],
  template: `
    <ta-trigram value="AMB"></ta-trigram>
    <ta-trigram value="JD"></ta-trigram>
    <ta-trigram [value]="null"></ta-trigram>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTrigramValuesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-trigram-sizes",
  imports: [TrigramComponent],
  template: `
    <ta-trigram value="CB" [size]="24"></ta-trigram>
    <ta-trigram value="CB" [size]="35"></ta-trigram>
    <ta-trigram value="CB" [size]="60"></ta-trigram>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTrigramSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-trigram",
  group: "Affichage",
  summary: "Pastille ronde affichant une courte chaîne, taille personnalisable en pixels.",
  examples: [
    {
      title: "Valeurs",
      description:
        "`value` est affiché tel quel (`{{ this.value() }}`) : ce composant ne calcule aucune initiale à partir d'un nom — c'est `ta-user-logo.getTrigram()` qui prépare la chaîne de trois caractères avant de la lui passer. `value=null` masque tout le composant (`@if (this.value())`).",
      component: TaTrigramValuesExample,
    },
    { title: "Tailles", description: "`size` (en pixels, 35 par défaut) fixe largeur, hauteur et taille de police (`size / 3`, arrondi).", component: TaTrigramSizesExample },
  ],
};
