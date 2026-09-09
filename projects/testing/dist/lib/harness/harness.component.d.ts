import { Type } from "@angular/core";
import * as i0 from "@angular/core";
/**
 * Monte dynamiquement un composant @ta/* selon le paramètre de route `caseId`,
 * en le cherchant dans les cas fournis via `provideHarnessCases`.
 * Réutilisable par n'importe quelle app consommatrice des librairies @ta/*.
 *
 * Un cas portant `component` est résolu de façon synchrone, comme auparavant ;
 * un cas portant `load` est chargé à la demande.
 */
export declare class TaHarnessComponent {
    private _cases;
    private _caseId;
    private _case;
    /**
     * Résultat de la résolution paresseuse, mémorisé avec l'identifiant qui l'a
     * produit. `component: null` signale un échec définitif pour ce cas.
     */
    private _lazy;
    readonly component: import("@angular/core").Signal<Type<unknown> | null>;
    readonly notFound: import("@angular/core").Signal<boolean>;
    /**
     * Le cas existe mais son composant ne viendra jamais : `load()` a échoué, ou le
     * cas est mal formé (ni `component` ni `load`). Sans cet état, la page resterait
     * figée sur « Chargement… » indéfiniment.
     */
    readonly loadFailed: import("@angular/core").Signal<boolean>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TaHarnessComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaHarnessComponent, "ta-harness", never, {}, {}, never, never, true, never>;
}
