import { InjectionToken, Provider, Type } from "@angular/core";
/**
 * Décrit un cas de test harness : un composant standalone wrapper rendant un
 * composant @ta/* dans une configuration canonique, adressable via une route.
 */
export interface HarnessCase {
    /** Identifiant unique utilisé dans l'URL (/e2e-harness/:caseId), ex: "ui-button" */
    id: string;
    /** Libellé lisible optionnel */
    label?: string;
    /** Composant standalone à monter */
    component: Type<unknown>;
}
/** Token DI portant la liste des cas harness enregistrés par l'application. */
export declare const TA_HARNESS_CASES: InjectionToken<HarnessCase[]>;
/** Enregistre les cas harness d'une application (à ajouter aux providers racine). */
export declare function provideHarnessCases(cases: HarnessCase[]): Provider;
