import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ListContainerComponent, ListElementComponent, ListTitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-list-title-basic",
  imports: [ListContainerComponent, ListElementComponent, ListTitleComponent],
  template: `
    <ta-list-container>
      <ta-list-element>
        <ta-list-title>Documentation mise à jour</ta-list-title>
      </ta-list-element>
      <ta-list-element>
        <ta-list-title>Migration de la base de données</ta-list-title>
      </ta-list-element>
    </ta-list-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaListTitleBasicExample {}

export const DEMO: ComponentDemo = {
  id: "ta-list-title",
  group: "Listes",
  summary: "Titre principal d'une ligne de liste, projeté dans `ta-list-element` via le sélecteur `ta-list-title`.",
  examples: [{ title: "Dans une liste", layout: "stack", component: TaListTitleBasicExample }],
};
