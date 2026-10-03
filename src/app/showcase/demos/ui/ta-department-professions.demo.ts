import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DepartmentProfessionsComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-department-professions-full",
  imports: [DepartmentProfessionsComponent],
  template: `<ta-department-professions [professions]="this.professions"></ta-department-professions>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDepartmentProfessionsFullExample {
  readonly professions = ["Menuisier", "Électricien", "Plombier", "Peintre", "Carreleur"];
}

@Component({
  standalone: true,
  selector: "app-ex-ta-department-professions-max-visible",
  imports: [DepartmentProfessionsComponent],
  template: `<ta-department-professions [professions]="this.professions" [maxVisible]="2"></ta-department-professions>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDepartmentProfessionsMaxVisibleExample {
  readonly professions = ["Menuisier", "Électricien", "Plombier", "Peintre", "Carreleur"];
}

export const DEMO: ComponentDemo = {
  id: "ta-department-professions",
  group: "Affichage",
  summary: "Liste de professions en badges, avec un plafond optionnel et un compteur du surplus.",
  examples: [
    { title: "Liste complète", description: "Une `ta-badge` par profession, sans `maxVisible`.", component: TaDepartmentProfessionsFullExample },
    {
      title: "Plafonnée",
      description: "`maxVisible=2` n'affiche que les deux premières professions et ajoute `+3` (`professions().length - maxVisible()`).",
      component: TaDepartmentProfessionsMaxVisibleExample,
    },
  ],
  notes:
    "`fontSize` (par défaut `\"xs\"`) est un input déclaré et couvert par un test (`professions.component.spec.ts`), mais jamais lu ni par le template ni par le SCSS actif : les règles `fontSize` de `professions.component.scss` sont toutes en commentaire. Le renseigner n'a donc aucun effet visible, vérifié dans les trois fichiers du composant.",
};
