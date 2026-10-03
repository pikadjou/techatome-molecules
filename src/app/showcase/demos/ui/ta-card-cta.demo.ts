import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-cta-actions",
  imports: [ButtonComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
      <ta-card-cta>
        <ta-button type="secondary" size="small">Lire l'article</ta-button>
        <ta-button type="tertiary" size="small">Partager</ta-button>
      </ta-card-cta>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardCtaActionsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-cta",
  group: "Cartes",
  summary: "Zone d'action en pied de carte, projetée via le sélecteur `ta-card-cta` de `card.component.html` — typiquement un ou plusieurs boutons.",
  examples: [{ title: "Boutons d'action", component: TaCardCtaActionsExample }],
};
