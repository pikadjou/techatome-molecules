import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardComponent, CardContentComponent, CardHeaderComponent, CardSubtitleComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-subtitle-present",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardSubtitleComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
        <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardSubtitlePresentExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-subtitle-absent",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
      </ta-card-header>
      <ta-card-content>Sans sous-titre projeté, l'espace qu'il occuperait n'est simplement pas rendu.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardSubtitleAbsentExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-subtitle",
  group: "Cartes",
  summary: "Sous-titre facultatif d'une carte, projeté sous le titre dans `ta-card-header` (sélecteur `ta-card-subtitle`).",
  examples: [
    { title: "Avec sous-titre", component: TaCardSubtitlePresentExample },
    { title: "Sans sous-titre", component: TaCardSubtitleAbsentExample },
  ],
};
