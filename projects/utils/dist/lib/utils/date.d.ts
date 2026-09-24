export declare const toLocalDateString: (utcDateString: string) => string;
export declare const toLocalDate: (utcDateString: string) => Date;
export declare const toUtcDate: (localDateString: Date) => Date;
export declare const diffInHourAndMinutes: (start: string, end: string) => {
    h: string;
    m: string;
};
export declare const isStrictISODateString: (value: string) => boolean;
/**
 * « HH:mm » → minutes depuis minuit. Une valeur absente ou mal formée vaut minuit : un horaire
 * se saisit dans un champ qui contraint déjà sa forme, et zéro reste une heure lisible.
 */
export declare const parseTimeToMinutes: (time: string | null | undefined) => number;
/** Minutes depuis minuit → « HH:mm ». Déborde et revient dans la journée plutôt que d'aller au-delà. */
export declare const formatMinutesToTime: (minutes: number) => string;
/** Ajoute des jours à une date, sans la muter. */
export declare const addDays: (date: Date, days: number) => Date;
/** Lundi 00:00 de la semaine locale qui contient `reference`. */
export declare const startOfLocalWeek: (reference?: Date) => Date;
/** Clé de regroupement par jour local — « 2026-09-15 ». */
export declare const localDayKey: (date: Date | string) => string;
/**
 * Le décalage local par rapport à UTC change-t-il dans les sept prochains jours ? Sert à prévenir
 * qu'un horaire récurrent va se décaler à l'écran sans que personne n'y ait touché.
 */
export declare const hasUpcomingOffsetShift: (reference?: Date) => boolean;
/** Les jours de la semaine dans l'ordre d'affichage européen, lundi en tête (0 = dimanche). */
export declare const WEEK_DAYS_FROM_MONDAY: number[];
/** Un créneau qui revient chaque semaine : un jour, une heure de début, une de fin. */
export interface WeeklySlot {
    /** 0 = dimanche, comme `Date.getDay()`. */
    dayOfWeek: number;
    /** « HH:mm ». */
    startTime: string;
    /** « HH:mm ». */
    endTime: string;
}
/**
 * Un créneau hebdomadaire exprimé en UTC, ramené à l'heure locale. Le décalage est celui en
 * vigueur à `reference` : un changement d'heure dans la semaine décalerait l'affichage, ce dont
 * `hasUpcomingOffsetShift` permet de prévenir.
 */
export declare const weeklySlotToLocal: (slot: WeeklySlot, reference?: Date) => WeeklySlot;
/**
 * L'inverse : un créneau saisi en heure locale, exprimé en UTC. `null` si la plage est vide ou
 * inversée, ou si elle franchit minuit UTC — un créneau appartient à un seul jour côté serveur.
 */
export declare const weeklySlotToUtc: (slot: WeeklySlot, reference?: Date) => WeeklySlot | null;
