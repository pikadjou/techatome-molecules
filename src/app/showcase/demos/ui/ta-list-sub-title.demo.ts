import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-sub-title-present",
  imports: [ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Design System Review</ta-list-title>
        <ta-list-sub-title>Prévue pour le prochain sprint</ta-list-sub-title>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListSubTitlePresentExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-list-sub-title-absent",
  imports: [ListContainerComponent, ListElementComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Design System Review</ta-list-title>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListSubTitleAbsentExample {}

export const DEMO: ComponentDemo = {
  id: "ta-list-sub-title",
  group: "Listes",
  summary: "Sous-titre facultatif d'une ligne de liste, projeté sous le titre dans `ta-list-element` (sélecteur `ta-list-sub-title`).",
  examples: [
    { title: "Avec sous-titre", component: TaListSubTitlePresentExample },
    { title: "Sans sous-titre", component: TaListSubTitleAbsentExample },
  ],
};
