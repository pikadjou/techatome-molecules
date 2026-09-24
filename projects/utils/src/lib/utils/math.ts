export const createRange = (number: number) => {
  return new Array(number).fill(0).map((n, index) => index + 1);
};

export const roundToDecimal = (number: number, precision: number) => {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
};

export const percentage = (partialValue: number, totalValue: number) => {
  return (100 * partialValue) / totalValue;
};

/**
 * Un nombre lu dans une chaîne qui peut manquer ou n'en pas être un : les API en renvoient
 * (métadonnées, paramètres d'URL). `null` dès que la valeur ne fait pas un nombre fini — à l'appelant
 * de décider quoi montrer, plutôt qu'un `NaN` qui traverse tout l'écran.
 */
export const parseNumber = (raw: string | null | undefined): number | null => {
  if (!raw) {
    return null;
  }

  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
};
