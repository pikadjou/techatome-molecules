import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BadgeComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-badge-types",
  imports: [BadgeComponent],
  template: `
    <ta-badge type="primary" value="Primary"></ta-badge>
    <ta-badge type="secondary" value="Secondary"></ta-badge>
    <ta-badge type="info" value="Info"></ta-badge>
    <ta-badge type="success" value="Success"></ta-badge>
    <ta-badge type="warning" value="Warning"></ta-badge>
    <ta-badge type="danger" value="Danger"></ta-badge>
    <ta-badge type="purple" value="Purple"></ta-badge>
    <ta-badge type="orange" value="Orange"></ta-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBadgeTypesExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-badge-icon",
  imports: [BadgeComponent],
  template: `
    <ta-badge type="success" value="Validé" icon="check"></ta-badge>
    <ta-badge type="danger" value="Erreur" icon="close"></ta-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBadgeIconExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-badge-clickable",
  imports: [BadgeComponent],
  template: `
    <ta-badge type="info" value="Cliquer ici" (clickAction)="this.clicks = this.clicks + 1"></ta-badge>
    <p>Cliqué {{ this.clicks }} fois.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaBadgeClickableExample {
  clicks = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-badge",
  group: "Bases",
  summary: "Pastille d'état, déclinée en huit intentions de couleur, avec icône optionnelle et clic toujours actif.",
  examples: [
    { title: "Types", description: "Les huit valeurs de `type`.", component: TaBadgeTypesExample },
    { title: "Avec icône", component: TaBadgeIconExample },
    {
      title: "Cliquable",
      description: "Le conteneur porte `(click)` sans condition : il n'existe aucun état désactivé, chaque badge émet toujours `clickAction`.",
      component: TaBadgeClickableExample,
    },
  ],
  notes:
    "`showClickOption` (ajout d'une flèche) est marqué `@deprecated` dans la source : omis des exemples pour ne pas orienter vers une API dépréciée. `value` passe par le pipe `translate` : une valeur sans clé de traduction correspondante s'affiche telle quelle.",
};
