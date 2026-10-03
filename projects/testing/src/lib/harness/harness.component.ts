import { NgComponentOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
  Type,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { map } from "rxjs";

import { TA_HARNESS_CASES } from "./harness-case";

/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 *
 * Un cas portant `component` est résolu de façon synchrone, comme auparavant ;
 * un cas portant `load` est chargé à la demande.
 */
@Component({
  selector: "ta-harness",
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else if (this.notFound()) {
      <div data-testid="harness-not-found">Case introuvable</div>
    } @else if (this.loadFailed()) {
      <div data-testid="harness-load-error">Échec du chargement du cas</div>
    } @else {
      <div data-testid="harness-loading">Chargement…</div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaHarnessComponent {
  private _cases = inject(TA_HARNESS_CASES);

  private _caseId = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get("caseId") ?? "")),
    { initialValue: "" }
  );

  private _case = computed(() => this._cases.find((c) => c.id === this._caseId()) ?? null);

  /**
   * Résultat de la résolution paresseuse, mémorisé avec l'identifiant qui l'a
   * produit. `component: null` signale un échec définitif pour ce cas.
   */
  private _lazy = signal<{ id: string; component: Type<unknown> | null } | null>(null);

  readonly component = computed<Type<unknown> | null>(() => {
    const found = this._case();
    if (!found) {
      return null;
    }
    if (found.component) {
      return found.component;
    }
    const lazy = this._lazy();
    return lazy?.id === found.id ? lazy.component : null;
  });

  readonly notFound = computed(() => this._case() === null);

  /**
   * Le cas existe mais son composant ne viendra jamais : `load()` a échoué, ou le
   * cas est mal formé (ni `component` ni `load`). Sans cet état, la page resterait
   * figée sur « Chargement… » indéfiniment.
   */
  readonly loadFailed = computed(() => {
    const found = this._case();
    const lazy = this._lazy();
    return !!found && !found.component && lazy?.id === found.id && lazy.component === null;
  });

  constructor() {
    effect(
      () => {
        const found = this._case();
        if (!found || found.component) {
          return;
        }
        const id = found.id;

        if (!found.load) {
          // Cas mal formé : ni composant direct, ni chargeur.
          this._lazy.set({ id, component: null });
          return;
        }

        void found
          .load()
          .then((component) => this._lazy.set({ id, component }))
          .catch((error: unknown) => {
            console.error(`[ta-harness] échec du chargement du cas "${id}"`, error);
            this._lazy.set({ id, component: null });
          });
      },
      { allowSignalWrites: true }
    );
  }
}
