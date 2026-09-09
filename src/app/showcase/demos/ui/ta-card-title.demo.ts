import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-title-basic",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardTitleBasicExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-title",
  group: "Cartes",
  summary: "Titre d'une carte, projeté dans `ta-card-header` (sélecteur `ta-card-title`) et rendu sans mise en forme propre.",
  examples: [{ title: "Dans un en-tête", component: TaCardTitleBasicExample }],
};
