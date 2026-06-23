/**
 * Liste statique des codes pays ISO 3166-1 alpha-2.
 * Les noms ne sont pas stockés : ils sont résolus/localisés à la volée via
 * `Intl.DisplayNames`, ce qui évite toute dépendance ou appel réseau.
 */
export declare const COUNTRY_CODES: string[];
export interface Country {
    /** Code ISO 3166-1 alpha-2 (ex. "BE"). */
    code: string;
    /** Nom localisé du pays (ex. "Belgique"). */
    name: string;
}
/**
 * Convertit un code pays ISO 3166-1 alpha-2 en nom localisé.
 *
 * @param code Code pays (ex. "BE"). La casse est ignorée.
 * @param locale Locale BCP 47 (ex. "fr", "en"). Par défaut : locale runtime.
 * @returns Le nom localisé du pays, ou le code en majuscules si introuvable.
 */
export declare const getCountryName: (code: string | null | undefined, locale?: string) => string;
/**
 * Retourne la liste complète des pays (code + nom localisé).
 *
 * Les pays "prioritaires" (ex. Belgique, France...) sont remontés en tête de
 * liste, dans l'ordre fourni ; le reste est trié alphabétiquement par nom.
 *
 * @param locale Locale BCP 47 utilisée pour les noms. Par défaut : locale runtime.
 * @param priorityCodes Codes ISO alpha-2 à mettre en évidence en tête de liste.
 */
export declare const getCountryList: (locale?: string, priorityCodes?: string[]) => Country[];
