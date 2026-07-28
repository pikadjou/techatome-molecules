import * as i0 from '@angular/core';
import { InjectionToken, inject, computed, ChangeDetectionStrategy, Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

/** Token DI portant la liste des cas harness enregistrés par l'application. */
const TA_HARNESS_CASES = new InjectionToken("TA_HARNESS_CASES");
/** Enregistre les cas harness d'une application (à ajouter aux providers racine). */
function provideHarnessCases(cases) {
    return { provide: TA_HARNESS_CASES, useValue: cases };
}

/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 */
class TaHarnessComponent {
    constructor() {
        this._cases = inject(TA_HARNESS_CASES);
        this._params = toSignal(inject(ActivatedRoute).paramMap);
        this.component = computed(() => {
            const id = this._params()?.get("caseId") ?? "";
            return this._cases.find((c) => c.id === id)?.component ?? null;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaHarnessComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: TaHarnessComponent, isStandalone: true, selector: "ta-harness", ngImport: i0, template: `
    @if (this.component(); as cmp) {
      <div data-testid="harness-root">
        <ng-container *ngComponentOutlet="cmp"></ng-container>
      </div>
    } @else {
      <div data-testid="harness-not-found">Case introuvable</div>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInputs", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaHarnessComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }] });

/**
 * Construit la route harness à ajouter au routing de l'application.
 * @param basePath segment de base (défaut "e2e-harness")
 */
function harnessRoutes(basePath = "e2e-harness") {
    return [{ path: `${basePath}/:caseId`, component: TaHarnessComponent }];
}

const TA_TESTING_SERVER_CONFIG = new InjectionToken("TA_TESTING_SERVER_CONFIG");
/**
 * Fournit un environnement de test uniforme pour les apps consommatrices :
 * point d'ancrage pour stubber les services @ta/server. À enrichir selon les
 * besoins réels des apps.
 */
function provideTestingServer(config = {}) {
    return [{ provide: TA_TESTING_SERVER_CONFIG, useValue: config }];
}

/*
 * Public API Surface of @ta/testing (runtime)
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TA_HARNESS_CASES, TA_TESTING_SERVER_CONFIG, TaHarnessComponent, harnessRoutes, provideHarnessCases, provideTestingServer };
//# sourceMappingURL=ta-testing.mjs.map
