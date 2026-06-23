/**
 * Liste statique des codes pays ISO 3166-1 alpha-2.
 * Les noms ne sont pas stockés : ils sont résolus/localisés à la volée via
 * `Intl.DisplayNames`, ce qui évite toute dépendance ou appel réseau.
 */
export const COUNTRY_CODES: string[] = [
  'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ',
  'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS',
  'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN',
  'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE',
  'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF',
  'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM',
  'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM',
  'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC',
  'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK',
  'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA',
  'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG',
  'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW',
  'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS',
  'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO',
  'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI',
  'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW',
];

export interface Country {
  /** Code ISO 3166-1 alpha-2 (ex. "BE"). */
  code: string;
  /** Nom localisé du pays (ex. "Belgique"). */
  name: string;
}

const buildDisplayNames = (locale?: string): Intl.DisplayNames | null => {
  if (typeof Intl === 'undefined' || typeof Intl.DisplayNames === 'undefined') {
    return null;
  }
  try {
    return new Intl.DisplayNames(locale ? [locale] : undefined, { type: 'region' });
  } catch {
    return null;
  }
};

/**
 * Convertit un code pays ISO 3166-1 alpha-2 en nom localisé.
 *
 * @param code Code pays (ex. "BE"). La casse est ignorée.
 * @param locale Locale BCP 47 (ex. "fr", "en"). Par défaut : locale runtime.
 * @returns Le nom localisé du pays, ou le code en majuscules si introuvable.
 */
export const getCountryName = (code: string | null | undefined, locale?: string): string => {
  if (!code) {
    return '';
  }
  const trimmed = code.trim();
  // On ne tente la conversion que sur un vrai code alpha-2 ; toute autre valeur
  // (ex. ancien stockage en nom complet "Belgique") est renvoyée telle quelle.
  if (!/^[A-Za-z]{2}$/.test(trimmed)) {
    return trimmed;
  }
  const normalized = trimmed.toUpperCase();
  const displayNames = buildDisplayNames(locale);
  if (!displayNames) {
    return normalized;
  }
  try {
    return displayNames.of(normalized) ?? normalized;
  } catch {
    return normalized;
  }
};

/**
 * Retourne la liste complète des pays (code + nom localisé).
 *
 * Les pays "prioritaires" (ex. Belgique, France...) sont remontés en tête de
 * liste, dans l'ordre fourni ; le reste est trié alphabétiquement par nom.
 *
 * @param locale Locale BCP 47 utilisée pour les noms. Par défaut : locale runtime.
 * @param priorityCodes Codes ISO alpha-2 à mettre en évidence en tête de liste.
 */
export const getCountryList = (locale?: string, priorityCodes: string[] = []): Country[] => {
  const displayNames = buildDisplayNames(locale);
  const collator = new Intl.Collator(locale ? [locale] : undefined, { sensitivity: 'base' });
  const priority = priorityCodes.map(code => code.trim().toUpperCase());

  const all: Country[] = COUNTRY_CODES.map(code => ({
    code,
    name: displayNames?.of(code) ?? code,
  }));

  const priorityList = priority
    .map(code => all.find(country => country.code === code))
    .filter((country): country is Country => !!country);

  const rest = all
    .filter(country => !priority.includes(country.code))
    .sort((a, b) => collator.compare(a.name, b.name));

  return [...priorityList, ...rest];
};
