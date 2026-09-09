import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent, CardComponent, CardContentComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-tag-success",
  imports: [BadgeComponent, CardComponent, CardContentComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-tag><ta-badge value="Nouveau" type="success"></ta-badge></ta-card-tag>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardTagSuccessExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-tag-danger",
  imports: [BadgeComponent, CardComponent, CardContentComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-tag><ta-badge value="Complet" type="danger"></ta-badge></ta-card-tag>
        <ta-card-title>Week-end à Bruges</ta-card-title>
      </ta-card-header>
      <ta-card-content>Canaux, chocolatiers et architecture flamande au cœur de la ville.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardTagDangerExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-tag",
  group: "Cartes",
  summary:
    "Zone d'étiquette d'une carte, projetée au-dessus du titre dans `ta-card-header` (sélecteur `ta-card-tag`) ; ne porte elle-même aucun style, tout vient de ce qu'elle projette.",
  examples: [
    { title: "Étiquette de succès", component: TaCardTagSuccessExample },
    { title: "Étiquette de danger", component: TaCardTagDangerExample },
  ],
};
