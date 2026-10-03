import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent, ListContainerComponent, ListElementComponent, ListExtraInformationComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-element-separator",
  imports: [ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element [withSeparator]="true">
        <ta-list-title>Avec séparateur</ta-list-title>
        <ta-list-sub-title>withSeparator vaut true par défaut</ta-list-sub-title>
      </ta-list-element>
      <ta-list-element [withSeparator]="false">
        <ta-list-title>Sans séparateur</ta-list-title>
        <ta-list-sub-title>withSeparator mis à false</ta-list-sub-title>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListElementSeparatorExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-list-element-flex-column",
  imports: [BadgeComponent, ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element [flexColumn]="true">
        <ta-list-title>Réponse aux invitations</ta-list-title>
        <ta-list-sub-title>flexColumn ajoute la classe responsive-container</ta-list-sub-title>
        <ta-list-tag><ta-badge value="En attente" type="warning"></ta-badge></ta-list-tag>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListElementFlexColumnExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-list-element-action",
  imports: [ListContainerComponent, ListElementComponent, ListExtraInformationComponent, ListSubTitleComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element (action)="this.clicks = this.clicks + 1">
        <ta-list-title>Cliquer le titre ou la zone d'information</ta-list-title>
        <ta-list-sub-title>(action) a été émis {{ this.clicks }} fois</ta-list-sub-title>
        <ta-list-extra-information>Zone cliquable</ta-list-extra-information>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListElementActionExample {
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-list-element",
  group: "Listes",
  summary: "Ligne d'une liste : assemble titre, sous-titre, étiquette et information annexe projetés, avec un output `action`.",
  examples: [
    {
      title: "Séparateur",
      description: "withSeparator (true par défaut) ajoute la bordure basse `.list-border` séparant les lignes.",
      component: TaListElementSeparatorExample,
    },
    {
      title: "Disposition en colonne",
      description:
        "flexColumn ajoute `.responsive-container`, qui empile titres et étiquette en colonne sous 768px de large puis revient en ligne au-delà : sur cette page, en résolution bureau, le rendu ne se distingue pas de la disposition par défaut — vérifié dans list-element.component.scss.",
      component: TaListElementFlexColumnExample,
    },
    {
      title: "Émission de l'action",
      description:
        "Cliquer la zone de titre ou la zone d'information annexe émet (action) — les deux zones portent le même gestionnaire `(click)=\"this.action.emit()\"` dans le template du composant ; la zone d'étiquette n'y répond pas.",
      component: TaListElementActionExample,
    },
  ],
};
