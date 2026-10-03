import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BooleanIconComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-boolean-icon-states",
  imports: [BooleanIconComponent],
  template: `
    <ta-boolean-icon [value]="true"></ta-boolean-icon>
    <ta-boolean-icon [value]="false"></ta-boolean-icon>
    <ta-boolean-icon [value]="null"></ta-boolean-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBooleanIconStatesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-boolean-icon-sizes",
  imports: [BooleanIconComponent],
  template: `
    <ta-boolean-icon [value]="true" size="sm"></ta-boolean-icon>
    <ta-boolean-icon [value]="true" size="md"></ta-boolean-icon>
    <ta-boolean-icon [value]="true" size="lg"></ta-boolean-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBooleanIconSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-boolean-icon",
  group: "Affichage",
  summary: "Icône de statut booléen, avec un état « non communiqué » distinct pour `null`/`undefined`.",
  examples: [
    {
      title: "États",
      description:
        "`true` affiche `task_alt` (succès), `false` affiche `cancel` (erreur) ; `null` — comme `undefined`, la valeur par défaut — déclenche `isNullValue()` et affiche le texte traduit `ui.boolean-icon.not-communicated` à la place de l'icône.",
      component: TaBooleanIconStatesExample,
    },
    { title: "Tailles", description: "`size` (`sm`/`md`/`lg` ici) redimensionne l'icône via `ta-font-icon[type]`.", component: TaBooleanIconSizesExample },
  ],
};
