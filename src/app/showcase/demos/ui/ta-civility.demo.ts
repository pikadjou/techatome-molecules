import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CivilityComponent } from "@ta/ui";
import { Civility } from "@ta/utils";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-civility-values",
  imports: [CivilityComponent],
  template: `
    <div>
      <span>Sir</span>
      <ta-civility [civility]="this.Civility.Sir"></ta-civility>
    </div>
    <div>
      <span>Madame</span>
      <ta-civility [civility]="this.Civility.Madame"></ta-civility>
    </div>
    <div>
      <span>Dear</span>
      <ta-civility [civility]="this.Civility.Dear"></ta-civility>
    </div>
    <div>
      <span>Unknown (rien ne s'affiche)</span>
      <ta-civility [civility]="this.Civility.Unknown"></ta-civility>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCivilityValuesExample {
  readonly Civility = Civility;
}

export const DEMO: ComponentDemo = {
  id: "ta-civility",
  group: "Affichage",
  summary: "Icône Material associée à une civilité (`Civility` de `@ta/utils`).",
  examples: [
    {
      title: "Valeurs",
      layout: "stack",
      description:
        "`getIcon()` associe `wc` à `Dear`, `woman` à `Madame`, `man` à `Sir`. `Civility.Unknown` vaut `0` : le template le teste avec `@if (this.civility())`, donc falsy — comme le serait `null` — et rien ne s'affiche, y compris une icône générique.",
      component: TaCivilityValuesExample,
    },
  ],
};
