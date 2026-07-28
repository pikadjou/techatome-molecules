import { NgComponentOutlet } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute } from "@angular/router";

import { TA_HARNESS_CASES } from "./harness-case";

/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
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
    } @else {
      <div data-testid="harness-not-found">Case introuvable</div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaHarnessComponent {
  private _cases = inject(TA_HARNESS_CASES);
  private _params = toSignal(inject(ActivatedRoute).paramMap);

  component = computed(() => {
    const id = this._params()?.get("caseId") ?? "";
    return this._cases.find((c) => c.id === id)?.component ?? null;
  });
}
