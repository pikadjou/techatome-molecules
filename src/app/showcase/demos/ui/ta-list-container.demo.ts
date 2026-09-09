import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent, ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-container-tasks",
  imports: [BadgeComponent, ListContainerComponent, ListElementComponent, ListSubTitleComponent, ListTagComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Revue du design system</ta-list-title>
        <ta-list-sub-title>Prévue pour le prochain sprint</ta-list-sub-title>
        <ta-list-tag><ta-badge value="Actif" type="success"></ta-badge></ta-list-tag>
      </ta-list-element>
      <ta-list-element>
        <ta-list-title>Intégration API</ta-list-title>
        <ta-list-sub-title>Équipe backend assignée</ta-list-sub-title>
        <ta-list-tag><ta-badge value="En cours" type="warning"></ta-badge></ta-list-tag>
      </ta-list-element>
      <ta-list-element>
        <ta-list-title>Tests utilisateurs</ta-list-title>
        <ta-list-sub-title>En attente de retours</ta-list-sub-title>
        <ta-list-tag><ta-badge value="En attente" type="secondary"></ta-badge></ta-list-tag>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListContainerTasksExample {}

export const DEMO: ComponentDemo = {
  id: "ta-list-container",
  group: "Listes",
  summary: "Conteneur d'une liste : enveloppe une suite de `ta-list-element` sans logique propre.",
  examples: [{ title: "Liste de tâches", layout: "stack", component: TaListContainerTasksExample }],
};
