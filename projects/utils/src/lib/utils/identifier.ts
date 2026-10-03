export const newGuid = (): string => {
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export const newId = (): number => {
  return Math.floor(Math.random() * 1000000 + 1);
};

/**
 * Deux identifiants désignent-ils le même GUID ?
 *
 * Un GUID circule sous plusieurs écritures — avec ou sans tirets, en
 * majuscules ou en minuscules — selon qu'il sort d'une API, d'une URL ou d'une
 * extension d'erreur. Une valeur absente ne désigne rien : elle n'est jamais
 * égale, pas même à une autre valeur absente.
 */
export const sameGuid = (
  a: string | null | undefined,
  b: string | null | undefined
): boolean => {
  if (!a || !b) {
    return false;
  }
  return normalizeGuid(a) === normalizeGuid(b);
};

/**
 * L'écriture canonique d'un GUID : sans tirets, en minuscules. Sert à comparer, mais aussi à
 * regrouper — une clé de `Set` ou de `Map` ne passe pas par `sameGuid`.
 */
export const normalizeGuid = (guid: string): string => {
  return guid.replace(/-/g, "").toLowerCase();
};

export const s4 = (): string => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
