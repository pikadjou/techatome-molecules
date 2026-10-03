/**
 * Montants facturés. Les API de paiement comptent en cents entiers : jamais de flottant sur
 * l'argent tant qu'on calcule, et la conversion se fait au dernier moment, pour l'affichage.
 */

/** Cents → unité principale (euros chez nous), pour le pipe `currency`. */
export const centsToEuros = (cents: number | null | undefined): number => {
  return (cents ?? 0) / 100;
};

/** TVA contenue dans un total TTC : `total × taux / (100 + taux)`. */
export const vatIncludedCents = (
  totalCents: number,
  vatRate: number
): number => {
  return Math.round((totalCents * vatRate) / (100 + vatRate));
};

/** Le même total, hors taxe. */
export const excludingVatCents = (
  totalCents: number,
  vatRate: number
): number => {
  return totalCents - vatIncludedCents(totalCents, vatRate);
};
