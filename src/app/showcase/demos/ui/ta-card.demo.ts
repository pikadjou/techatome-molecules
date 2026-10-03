import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardTitleComponent,
} from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-card-basic",
  imports: [CardComponent, CardContentComponent, CardHeaderComponent, CardTitleComponent],
  template: `
    <ta-card>
      <ta-card-header>
        <ta-card-title>Titre de la carte</ta-card-title>
      </ta-card-header>
      <ta-card-content>Contenu projeté dans la carte.</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardBasicExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-flags",
  imports: [CardComponent, CardContentComponent],
  template: `
    <ta-card [highlight]="true">
      <ta-card-content>highlight</ta-card-content>
    </ta-card>
    <ta-card [shadow]="false">
      <ta-card-content>shadow désactivée</ta-card-content>
    </ta-card>
    <ta-card [isNew]="true">
      <ta-card-content>isNew</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardFlagsExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-card-direction",
  imports: [CardComponent, CardContentComponent],
  template: `
    <ta-card directionCard="vertical">
      <ta-card-content>vertical</ta-card-content>
    </ta-card>
    <ta-card directionCard="horizontal">
      <ta-card-content>horizontal</ta-card-content>
    </ta-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCardDirectionExample {}

export const DEMO: ComponentDemo = {
  id: "ta-card",
  group: "Cartes",
  summary: "Conteneur de contenu à projection, avec en-tête, titre et corps optionnels.",
  examples: [
    { title: "Composition", description: "En-tête, titre et contenu projetés.", component: TaCardBasicExample },
    { title: "Drapeaux", component: TaCardFlagsExample },
    { title: "Direction", component: TaCardDirectionExample },
  ],
};
