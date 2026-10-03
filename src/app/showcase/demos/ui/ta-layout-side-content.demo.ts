import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutSideContentComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-side-content-list",
  imports: [LayoutSideContentComponent, TitleComponent, TextComponent],
  template: `
    <ta-layout-side-content>
      <div class="p-space-md flex-column g-space-sm">
        <ta-title [level]="4">Catégories</ta-title>
        @for (category of this.categories; track category) {
          <ta-text size="sm">{{ category }}</ta-text>
        }
      </div>
    </ta-layout-side-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutSideContentListExample {
  readonly categories = ["Électronique", "Mode", "Maison", "Sport"];
}

export const DEMO: ComponentDemo = {
  id: "ta-layout-side-content",
  group: "Mise en page",
  summary: "Enveloppe de contenu latéral sans mise en forme propre — `<div class=\"form-container\"><ng-content></ng-content></div>`, avec un SCSS entièrement commenté (vérifié dans layout-side-content.component.scss).",
  examples: [
    {
      title: "Liste projetée",
      description:
        "Sans style propre, ce composant ne fait que marquer sémantiquement la zone de contenu latéral ; padding et espacement viennent ici des classes utilitaires (`p-space-md`, `g-space-sm`) posées sur le contenu projeté, pas du composant. Il est normalement l'enfant `ta-layout-side-content` sélectionné par `ta-layout-side` — voir sa démo pour la composition complète avec `ta-layout-side-cta`.",
      component: TaLayoutSideContentListExample,
    },
  ],
};
