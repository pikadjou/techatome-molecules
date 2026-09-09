import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent, ListContainerComponent, ListElementComponent, ListTagComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-tag-admin",
  imports: [BadgeComponent, ListContainerComponent, ListElementComponent, ListTagComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Alice Martin</ta-list-title>
        <ta-list-tag><ta-badge value="Admin" type="primary"></ta-badge></ta-list-tag>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListTagAdminExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-list-tag-viewer",
  imports: [BadgeComponent, ListContainerComponent, ListElementComponent, ListTagComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Bob Johnson</ta-list-title>
        <ta-list-tag>
          <ta-badge value="Lecteur" type="secondary"></ta-badge>
          <ta-badge value="Distant" type="purple"></ta-badge>
        </ta-list-tag>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListTagViewerExample {}

export const DEMO: ComponentDemo = {
  id: "ta-list-tag",
  group: "Listes",
  summary:
    "Zone d'étiquette d'une ligne de liste, projetée à droite du titre dans `ta-list-element` (sélecteur `ta-list-tag`) ; ne porte elle-même aucun style.",
  examples: [
    { title: "Une étiquette", component: TaListTagAdminExample },
    { title: "Plusieurs étiquettes", description: "La zone accepte plusieurs badges projetés côte à côte.", component: TaListTagViewerExample },
  ],
};
