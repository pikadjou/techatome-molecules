import * as i0 from "@angular/core";
/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 */
export declare class TaHarnessComponent {
    private _cases;
    private _params;
    component: import("@angular/core").Signal<import("@angular/core").Type<unknown> | null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaHarnessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaHarnessComponent, "ta-harness", never, {}, {}, never, never, true, never>;
}
