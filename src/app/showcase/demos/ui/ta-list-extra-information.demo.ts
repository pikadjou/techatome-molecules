import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent, ListContainerComponent, ListElementComponent, ListExtraInformationComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-extra-information-basic",
  imports: [BadgeComponent, ListContainerComponent, ListElementComponent, ListExtraInformationComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Alice Martin</ta-list-title>
        <ta-list-sub-title>Product Designer</ta-list-sub-title>
        <ta-list-tag><ta-badge value="Admin" type="primary"></ta-badge></ta-list-tag>
        <ta-list-extra-information>Dernière connexion : il y a 2 heures</ta-list-extra-information>
      </ta-list-element>
      <ta-list-element>
        <ta-list-title>Bob Johnson</ta-list-title>
        <ta-list-sub-title>Frontend Developer</ta-list-sub-title>
        <ta-list-tag><ta-badge value="Éditeur" type="info"></ta-badge></ta-list-tag>
        <ta-list-extra-information>Dernière connexion : hier</ta-list-extra-information>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListExtraInformationBasicExample {}

export const DEMO: ComponentDemo = {
  id: "ta-list-extra-information",
  group: "Listes",
  summary: "Information annexe d'une ligne de liste, projetée en fin de ligne dans `ta-list-element` (sélecteur `ta-list-extra-information`).",
  examples: [{ title: "Dernière connexion", layout: "stack", component: TaListExtraInformationBasicExample }],
};
