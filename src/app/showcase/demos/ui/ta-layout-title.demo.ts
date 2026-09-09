import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutTitleComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-title-basic",
  imports: [LayoutTitleComponent, TitleComponent],
  template: `
    <ta-layout-title>
      <ta-title [level]="2" [isBold]="true">Paramètres du compte</ta-title>
    </ta-layout-title>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutTitleBasicExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-title",
  group: "Mise en page",
  summary: "Emplacement de titre de page : ajoute uniquement un padding horizontal autour de son contenu projeté.",
  examples: [
    {
      title: "Titre de page",
      description:
        "Vérifié dans layout-title.component.scss : la seule règle est `padding: 0 common.get-var(space, sm)` — aucune autre logique. Utilisé typiquement, comme ici, avec un `ta-title` projeté ; `ta-layout-page` le récupère par sélecteur nommé (`ng-content select=\"ta-layout-title\"`) dans sa propre zone de titre — voir sa démo pour la composition complète.",
      component: TaLayoutTitleBasicExample,
    },
  ],
};
