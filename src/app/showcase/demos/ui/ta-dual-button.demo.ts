import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DualButtonComponent, DualButtonInput } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-dual-button-types",
  imports: [DualButtonComponent],
  template: `
    <ta-dual-button type="primary" [first]="this.first" [second]="this.second"></ta-dual-button>
    <ta-dual-button type="secondary" [first]="this.first" [second]="this.second"></ta-dual-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDualButtonTypesExample {
  readonly first: DualButtonInput = { icon: "check", label: "Confirmer", callback: () => undefined };
  readonly second: DualButtonInput = { icon: "close", label: "Annuler", callback: () => undefined };
}

@Component({
  standalone: true,
  selector: "app-ex-ta-dual-button-full",
  imports: [DualButtonComponent],
  template: `
    <ta-dual-button [isFull]="true" [first]="this.first" [second]="this.second"></ta-dual-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDualButtonFullExample {
  readonly first: DualButtonInput = { icon: "save", label: "Enregistrer", callback: () => undefined };
  readonly second: DualButtonInput = { icon: "delete", label: "Abandonner", callback: () => undefined };
}

export const DEMO: ComponentDemo = {
  id: "ta-dual-button",
  group: "Boutons",
  summary: "Paire de boutons accolés, chacun avec sa propre icône, son libellé et son `callback`.",
  examples: [
    { title: "Types", description: "Les deux valeurs de `type`.", component: TaDualButtonTypesExample },
    { title: "Pleine largeur", description: "`isFull` étire le duo sur toute la largeur disponible.", component: TaDualButtonFullExample },
  ],
  notes:
    "`ta-dual-button` ne porte aucun input d'état : chaque moitié appelle son `callback` au clic sans condition, il n'existe pas de variante désactivée.",
};
