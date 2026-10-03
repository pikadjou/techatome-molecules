import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CardComponent, CardContentComponent, CardHeaderComponent, CardImageComponent, CardTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-image-src",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardImageComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-image src="https://picsum.photos/seed/ardennes/400/200"></ta-card-image>
      <ta-card-header>
        <ta-card-title>Randonnée dans les Ardennes</ta-card-title>
      </ta-card-header>
      <ta-card-content>Trois jours de marche à travers les forêts et vallées de la Semois.</ta-card-content>
    </ta-card>
    <ta-card>
      <ta-card-image src="https://picsum.photos/seed/bruges/400/200"></ta-card-image>
      <ta-card-header>
        <ta-card-title>Week-end à Bruges</ta-card-title>
      </ta-card-header>
      <ta-card-content>Canaux, chocolatiers et architecture flamande au cœur de la ville.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardImageSrcExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card-image",
  group: "Cartes",
  summary: "Image en tête d'une carte : `src` (chaîne, vide par défaut) est liée directement à l'attribut `src` de la balise `<img>`.",
  examples: [{ title: "Deux images", component: TaCardImageSrcExample }],
};
