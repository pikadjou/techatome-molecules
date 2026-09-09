import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NewComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-new-visible",
  imports: [NewComponent],
  template: `
    <div style="position: relative; display: inline-block; padding: 12px 24px; background: #f2f2f2; border-radius: 8px;">
      Nouveauté
      <ta-new [visible]="true"></ta-new>
    </div>
    <div style="position: relative; display: inline-block; padding: 12px 24px; background: #f2f2f2; border-radius: 8px;">
      Déjà vu
      <ta-new [visible]="false"></ta-new>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNewVisibleExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-new-relative",
  imports: [NewComponent],
  template: `
    <span>Dans le flux :</span>
    <ta-new [visible]="true" [isRelative]="true" size="lg"></ta-new>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNewRelativeExample {}

export const DEMO: ComponentDemo = {
  id: "ta-new",
  group: "Affichage",
  summary: "Puce « nouveau », positionnée en absolu sur un coin par défaut ou dans le flux avec `isRelative`.",
  examples: [
    {
      title: "Visible / masqué",
      description:
        "`visible=false` (la valeur par défaut) ne rend rien du tout — pas de puce, pas d'espace réservé. `visible=true` sans `isRelative` positionne la puce en absolu sur le premier ancêtre positionné (ici la carte grise).",
      component: TaNewVisibleExample,
    },
    {
      title: "Dans le flux",
      description: "`isRelative=true` remet la puce (un `ta-bullet[type=\"new\"]`) dans le flux normal, à la suite du contenu.",
      component: TaNewRelativeExample,
    },
  ],
};
