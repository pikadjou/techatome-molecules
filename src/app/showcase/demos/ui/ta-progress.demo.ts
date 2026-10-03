import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ProgressComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-types",
  imports: [ProgressComponent],
  template: `
    <div class="flex-column g-space-sm">
      @for (type of this.types; track type) {
        <ta-progress [type]="type" [value]="60">{{ type }}</ta-progress>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressTypesExample {
  readonly types = ["default", "secondary", "success", "warning", "alert", "purple", "new"] as const;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-sizes",
  imports: [ProgressComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-progress size="xs" [value]="70">xs</ta-progress>
      <ta-progress size="sm" [value]="70">sm</ta-progress>
      <ta-progress size="md" [value]="70">md (défaut)</ta-progress>
      <ta-progress size="lg" [value]="70">lg</ta-progress>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressSizesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-values",
  imports: [ProgressComponent],
  template: `
    <div class="flex-column g-space-sm">
      <ta-progress [value]="25">25 %</ta-progress>
      <ta-progress [value]="50">50 %</ta-progress>
      <ta-progress [value]="75">75 %</ta-progress>
      <ta-progress [value]="100">100 %</ta-progress>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressValuesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-progress",
  group: "Progression",
  summary: "Barre de progression compacte (piste + remplissage + libellé projeté), en sept couleurs et quatre tailles distinctes.",
  examples: [
    {
      title: "Types",
      layout: "stack",
      description: "Les six premiers types colorent la piste (`.progress-<type>` dans `progress.component.scss`) ; `new` n'a pas de règle correspondante et reste sans couleur (vérifié).",
      component: TaProgressTypesExample,
    },
    {
      title: "Tailles",
      layout: "stack",
      description: "`xs`, `sm` et `lg` ont une hauteur dédiée ; `md` est la hauteur de base (24px). Les tailles `xl`/`xxl`/`big`, également acceptées par le type `TaSizes`, n'ont pas de règle dans le SCSS et rendent comme `md`.",
      component: TaProgressSizesExample,
    },
    { title: "Valeurs", layout: "stack", description: "`getProgressStyle()` borne `value` entre 0 et 100 avant de fixer la largeur du remplissage.", component: TaProgressValuesExample },
  ],
};
