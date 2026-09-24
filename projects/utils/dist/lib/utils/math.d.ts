export declare const createRange: (number: number) => number[];
export declare const roundToDecimal: (number: number, precision: number) => number;
export declare const percentage: (partialValue: number, totalValue: number) => number;
/**
 * Un nombre lu dans une chaîne qui peut manquer ou n'en pas être un : les API en renvoient
 * (métadonnées, paramètres d'URL). `null` dès que la valeur ne fait pas un nombre fini — à l'appelant
 * de décider quoi montrer, plutôt qu'un `NaN` qui traverse tout l'écran.
 */
export declare const parseNumber: (raw: string | null | undefined) => number | null;
