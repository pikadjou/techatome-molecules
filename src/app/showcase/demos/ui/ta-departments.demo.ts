import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DepartmentsComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

interface Department {
  id: number;
  name: string | null;
  iconPath: string | null;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-departments-default",
  imports: [DepartmentsComponent],
  template: `<ta-departments [departments]="this.departments" [professions]="this.professions"></ta-departments>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDepartmentsDefaultExample {
  readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
  ];

  readonly professions = ["Menuisier", "Ferronnier", "Chef de chantier"];
}

export const DEMO: ComponentDemo = {
  id: "ta-departments",
  group: "Affichage",
  summary: "Compose `ta-department-icon-list` et `ta-department-professions` l'un sous l'autre.",
  examples: [
    {
      title: "Départements et professions",
      layout: "stack",
      description: "Assemble les deux listes sans option supplémentaire : `withName` et `maxVisible` des sous-composants ne sont pas exposés par `ta-departments`.",
      component: TaDepartmentsDefaultExample,
    },
  ],
};
