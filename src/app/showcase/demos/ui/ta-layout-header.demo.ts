import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutHeaderComponent, LayoutHeaderDefaultComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-header-composition",
  imports: [LayoutHeaderComponent, LayoutHeaderDefaultComponent],
  template: `
    <ta-layout-header>
      <ta-layout-header-default title="Espace client" [showBack]="false"></ta-layout-header-default>
    </ta-layout-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutHeaderCompositionExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-header",
  group: "Mise en page",
  summary: "Bandeau d'en-tête sans mise en forme propre : `<div class=\"header\"><ng-content></ng-content></div>` (vérifié dans layout-header.component.html), destiné à recevoir `ta-layout-header-default`, `ta-layout-header-logo` et/ou `ta-layout-title`.",
  examples: [
    {
      title: "Enveloppe autour d'un en-tête par défaut",
      description:
        "`ta-layout-header` n'ajoute aucun style hormis, sous 768px, une couleur de texte et un padding (media query dans layout-header.component.scss) : ce qu'on voit ici vient entièrement de `ta-layout-header-default` qu'il enveloppe. C'est aussi le seul enfant que `ta-layout-page` sait extraire par sélecteur (`ng-content select=\"ta-layout-header\"`) : voir la démo de `ta-layout-page` pour cette composition.",
      component: TaLayoutHeaderCompositionExample,
    },
  ],
};
