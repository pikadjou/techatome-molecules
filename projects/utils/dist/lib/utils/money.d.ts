/**
 * Montants facturés. Les API de paiement comptent en cents entiers : jamais de flottant sur
 * l'argent tant qu'on calcule, et la conversion se fait au dernier moment, pour l'affichage.
 */
/** Cents → unité principale (euros chez nous), pour le pipe `currency`. */
export declare const centsToEuros: (cents: number | null | undefined) => number;
/** TVA contenue dans un total TTC : `total × taux / (100 + taux)`. */
export declare const vatIncludedCents: (totalCents: number, vatRate: number) => number;
/** Le même total, hors taxe. */
export declare const excludingVatCents: (totalCents: number, vatRate: number) => number;
