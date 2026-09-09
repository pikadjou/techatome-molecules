import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CultureComponent } from "@ta/ui";
import { Culture } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-culture-list",
  imports: [CultureComponent],
  template: `<ta-culture [cultures]="this.cultures"></ta-culture>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCultureListExample {
  readonly cultures: Culture[] = [Culture.FR_BE, Culture.NL_NL, Culture.EN_EN];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-culture-empty",
  imports: [CultureComponent],
  template: `<ta-culture [cultures]="[]"></ta-culture>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCultureEmptyExample {}

export const DEMO: ComponentDemo = {
  id: "ta-culture",
  group: "Affichage",
  summary: "Liste de cultures affichées en ligne, séparées par des virgules.",
  examples: [
    {
      title: "Liste de cultures",
      description:
        "Chaque valeur de `Culture` (@ta/utils) est traduite via la clé `ui.culture.short.<valeur numérique>` : aucun fichier i18n de `@ta/ui` ne définit de clé `culture.short.*` (recherche globale sur `culture` dans `projects/ui/src/i18n/`) — la liste affiche donc les clés brutes séparées par des virgules (ex. `ui.culture.short.11, ui.culture.short.20, ui.culture.short.30`), pas des libellés de langue, vérifié à l'exécution.",
      component: TaCultureListExample,
    },
    { title: "Liste vide", description: "`cultures` vide : la boucle `@for` ne produit rien, seul le conteneur flex reste.", component: TaCultureEmptyExample },
  ],
};
