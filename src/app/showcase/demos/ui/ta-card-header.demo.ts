import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  BadgeComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardSubtitleComponent,
  CardTagComponent,
  CardTitleComponent,
} from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-header-composition",
  imports: [
    BadgeComponent,
    CardComponent,
    CardContentComponent,
    CardHeaderComponent,
    CardSubtitleComponent,
    CardTagComponent,
    CardTitleComponent,
  ],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-tag><ta-badge value="Nouveau" type="success"></ta-badge></ta-card-tag>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
        <ta-card-subtitle>Publié le 3 septembre 2026</ta-card-subtitle>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardHeaderCompositionExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-header-minimal",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Sans étiquette ni sous-titre</ta-card-title>
      </ta-card-header>
      <ta-card-content>L'en-tête n'affiche que ce que le parent projette : ici, seul le titre.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardHeaderMinimalExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-header",
  group: "Cartes",
  summary:
    "Zone d'en-tête d'une carte : recueille les projections nommées `ta-card-tag`, `ta-card-title` et `ta-card-subtitle` au-dessus du contenu.",
  examples: [
    {
      title: "Composition complète",
      description:
        "L'en-tête empile l'étiquette, le titre et le sous-titre projetés — trois `<ng-content select>` distincts dans `card-header.component.html`.",
      component: TaCardHeaderCompositionExample,
    },
    {
      title: "Emplacements optionnels",
      description: "Étiquette et sous-titre sont facultatifs : leur emplacement ne rend rien s'ils ne sont pas projetés.",
      component: TaCardHeaderMinimalExample,
    },
  ],
};
