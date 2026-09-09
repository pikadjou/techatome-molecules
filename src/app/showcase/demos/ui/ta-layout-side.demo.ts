import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, LayoutSideComponent, LayoutSideContentComponent, LayoutSideCtaComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-side-anatomy",
  imports: [LayoutSideComponent, LayoutSideContentComponent, LayoutSideCtaComponent, TitleComponent, TextComponent, ButtonComponent],
  template: `
    <div style="max-height: 260px; overflow: auto;">
      <ta-layout-side>
        <ta-layout-side-content>
          <div class="p-space-md flex-column g-space-sm">
            <ta-title [level]="4">Filtres</ta-title>
            <ta-text size="sm">Statut : actif</ta-text>
            <ta-text size="sm">Ville : Bruxelles</ta-text>
            <ta-text size="sm">Catégorie : Électronique</ta-text>
            <ta-text size="sm">Cette zone défile (flex:1, overflow-y:auto) si elle dépasse la hauteur disponible.</ta-text>
          </div>
        </ta-layout-side-content>
        <ta-layout-side-cta [background]="true">
          <ta-button type="primary">Appliquer les filtres</ta-button>
        </ta-layout-side-cta>
      </ta-layout-side>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutSideAnatomyExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-side",
  group: "Mise en page",
  summary: "Colonne latérale à deux zones nommées : un contenu défilant (`ta-layout-side-content`) et un pied d'action fixe (`ta-layout-side-cta`).",
  examples: [
    {
      title: "Contenu défilant et pied d'action",
      layout: "stack",
      description:
        "Vérifié dans layout-side.component.scss : `.side-content` prend `flex: 1` et `overflow-y: auto`, `.side-cta` reste en pied de colonne. La fenêtre bornée (`max-height: 260px`) ci-dessus est un ajout de cette page de démonstration pour rendre le défilement visible ; `ta-layout-side` lui-même n'impose aucune hauteur.",
      component: TaLayoutSideAnatomyExample,
    },
  ],
};
