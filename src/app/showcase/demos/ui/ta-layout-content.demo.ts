import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutContentComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-content-height",
  imports: [LayoutContentComponent, TitleComponent, TextComponent],
  template: `
    <ta-text [isBold]="true">Par défaut — autoHeight = false</ta-text>
    <div style="max-height: 220px; overflow: auto;">
      <ta-layout-content>
        <ta-title [level]="4">Contenu court</ta-title>
        <ta-text>Même court, ce bloc occupe au moins la hauteur de l'écran : faites défiler cette fenêtre bornée (ajoutée pour la démonstration, elle ne fait pas partie du composant) pour voir l'espace vide en dessous.</ta-text>
      </ta-layout-content>
    </div>

    <ta-text [isBold]="true">autoHeight = true</ta-text>
    <ta-layout-content [autoHeight]="true">
      <ta-title [level]="4">Contenu compact</ta-title>
      <ta-text>Ici la hauteur suit exactement le contenu, sans marge ni minimum ajoutés.</ta-text>
    </ta-layout-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutContentHeightExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-content",
  group: "Mise en page",
  summary: "Conteneur de contenu de page, avec une hauteur minimale d'écran par défaut ou une hauteur suivant le contenu.",
  examples: [
    {
      title: "autoHeight",
      layout: "stack",
      description:
        "Par défaut, `.layout-content` porte `min-height: calc(100vh - 80px)` et une marge de `common.get-var(space, sm)` (vérifié dans layout-content.component.scss) : même un contenu très court occupe presque tout l'écran. `autoHeight=true` remplace ce minimum par `auto` et retire la marge : le bloc s'arrête au contenu. La fenêtre à défilement bornée du premier exemple est un ajout de cette page de démonstration, pas un comportement du composant.",
      component: TaLayoutContentHeightExample,
    },
  ],
};
