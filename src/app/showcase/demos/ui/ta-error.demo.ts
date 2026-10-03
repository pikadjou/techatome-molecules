import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ErrorComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-error-retry",
  imports: [ErrorComponent],
  template: `
    <ta-error message="Impossible de charger les données." (retry)="this.retries = this.retries + 1"></ta-error>
    <p>Tentatives de réessai : {{ this.retries }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaErrorRetryExample {
  retries = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-error-no-retry",
  imports: [ErrorComponent],
  template: `<ta-error message="Accès refusé." [showRetry]="false"></ta-error>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaErrorNoRetryExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-error-passthrough",
  imports: [ErrorComponent],
  template: `
    <ta-error>
      <p>Aucun message d'erreur : le contenu projeté s'affiche à la place.</p>
    </ta-error>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaErrorPassthroughExample {}

export const DEMO: ComponentDemo = {
  id: "ta-error",
  group: "Conteneurs",
  summary: "Bloc d'erreur (icône, titre, message, bouton de réessai) affiché tant que `message` n'est pas vide.",
  examples: [
    {
      title: "Avec bouton de réessai",
      description: "`showRetry` (vrai par défaut) affiche un bouton dont le clic émet `retry` via `onRetry()`.",
      component: TaErrorRetryExample,
    },
    { title: "Sans bouton de réessai", description: "`showRetry=\"false\"` retire le bouton.", component: TaErrorNoRetryExample },
    {
      title: "Message vide",
      description: "`message=\"\"` (valeur par défaut) bascule vers `<ng-content>` : le composant devient un simple passe-plat.",
      component: TaErrorPassthroughExample,
    },
  ],
  notes:
    "`code` (`200` par défaut) est déclaré comme entrée mais n'est lu ni par le gabarit ni par la classe (vérifié dans `error.component.ts`/`.html`) : le fixer n'a aucun effet visible.",
};
