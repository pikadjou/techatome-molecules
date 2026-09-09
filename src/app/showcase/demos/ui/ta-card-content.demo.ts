import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardSubtitleComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-content-basic",
  imports: [ButtonComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardSubtitleComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
        <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
      </ta-card-header>
      <ta-card-content>
        Trois jours de marche à travers les forêts et vallées de la Semois, avec bivouac en
        pleine nature et étapes ravitaillées dans les villages traversés.
      </ta-card-content>
      <ta-card-cta>
        <ta-button type="secondary" size="small">Lire l'article</ta-button>
      </ta-card-cta>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardContentBasicExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-content",
  group: "Cartes",
  summary: "Corps d'une carte, entre l'en-tête et la zone d'action (sélecteur `ta-card-content` dans `card.component.html`).",
  examples: [
    {
      title: "Entre en-tête et action",
      description:
        "`ta-card-content` porte la classe utilitaire `flex-full` (`flex: 1 1 100%`) : c'est elle qui absorbe l'espace vertical restant entre l'en-tête et la zone d'action.",
      component: TaCardContentBasicExample,
    },
  ],
};
