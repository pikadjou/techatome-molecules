export declare const newGuid: () => string;
export declare const newId: () => number;
/**
 * Deux identifiants désignent-ils le même GUID ?
 *
 * Un GUID circule sous plusieurs écritures — avec ou sans tirets, en
 * majuscules ou en minuscules — selon qu'il sort d'une API, d'une URL ou d'une
 * extension d'erreur. Une valeur absente ne désigne rien : elle n'est jamais
 * égale, pas même à une autre valeur absente.
 */
export declare const sameGuid: (a: string | null | undefined, b: string | null | undefined) => boolean;
/**
 * L'écriture canonique d'un GUID : sans tirets, en minuscules. Sert à comparer, mais aussi à
 * regrouper — une clé de `Set` ou de `Map` ne passe pas par `sameGuid`.
 */
export declare const normalizeGuid: (guid: string) => string;
export declare const s4: () => string;
