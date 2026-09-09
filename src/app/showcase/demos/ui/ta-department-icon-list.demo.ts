import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DepartmentIconListComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

interface Department {
  id: number;
  name: string | null;
  iconPath: string | null;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-department-icon-list-with-name",
  imports: [DepartmentIconListComponent],
  template: `<ta-department-icon-list [departments]="this.departments" [withName]="true"></ta-department-icon-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDepartmentIconListWithNameExample {
  readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
    { id: 3, name: "Électricité", iconPath: null },
  ];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-department-icon-list-without-name",
  imports: [DepartmentIconListComponent],
  template: `<ta-department-icon-list [departments]="this.departments"></ta-department-icon-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDepartmentIconListWithoutNameExample {
  readonly departments: Department[] = [
    { id: 1, name: "Menuiserie", iconPath: "/assets/partners/icon/icon.png" },
    { id: 2, name: "Ferronnerie", iconPath: null },
  ];
}

export const DEMO: ComponentDemo = {
  id: "ta-department-icon-list",
  group: "Affichage",
  summary: "Liste d'icônes de départements, avec ou sans nom affiché à côté de chacune.",
  examples: [
    {
      title: "Avec noms",
      description:
        "`withName=true` affiche le nom de chaque département (séparés par des virgules) sous sa vignette ; `iconPath` absent (`null`) laisse la vignette vide sans casser la mise en page.",
      component: TaDepartmentIconListWithNameExample,
    },
    { title: "Sans noms", description: "`withName` par défaut (`false`) : seules les vignettes s'affichent.", component: TaDepartmentIconListWithoutNameExample },
  ],
};
