import {
  addDays as addDaysFns,
  addWeeks,
  differenceInMinutes,
  format,
  isValid,
  parseISO,
  startOfWeek,
} from "date-fns";

export const toLocalDateString = (utcDateString: string): string => {
  return toLocalDate(utcDateString).toString();
};

export const toLocalDate = (utcDateString: string): Date => {
  const utcDate = new Date(utcDateString);
  return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60 * 1000);
};

export const toUtcDate = (localDateString: Date): Date => {
  return new Date(
    localDateString.getTime() - localDateString.getTimezoneOffset() * 60 * 1000
  );
};

export const diffInHourAndMinutes = (
  start: string,
  end: string
): { h: string; m: string } => {
  const diff = differenceInMinutes(new Date(end), new Date(start));

  const hours = Math.floor(diff / 60);
  const minutes = Math.round(diff - hours * 60);

  return {
    h: hours.toString().padStart(2, "0"),
    m: minutes.toString().padStart(2, "0"),
  };
};

export const isStrictISODateString = (value: string) => {
  // Vérifie le format complet ISO 8601 (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.sssZ)
  const isoRegex =
    /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|([+-]\d{2}:\d{2})))?$/;

  if (!isoRegex.test(value)) return false;

  const date = parseISO(value);
  return isValid(date) && value === date.toISOString().slice(0, value.length);
};

const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;
const MINUTES_PER_WEEK = MINUTES_PER_DAY * 7;

/**
 * « HH:mm » → minutes depuis minuit. Une valeur absente ou mal formée vaut minuit : un horaire
 * se saisit dans un champ qui contraint déjà sa forme, et zéro reste une heure lisible.
 */
export const parseTimeToMinutes = (
  time: string | null | undefined
): number => {
  const match = /^(\d{1,2}):(\d{2})$/.exec((time ?? "").trim());
  if (!match) {
    return 0;
  }
  return Number(match[1]) * MINUTES_PER_HOUR + Number(match[2]);
};

/** Minutes depuis minuit → « HH:mm ». Déborde et revient dans la journée plutôt que d'aller au-delà. */
export const formatMinutesToTime = (minutes: number): string => {
  const normalized =
    ((minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY) % MINUTES_PER_DAY;
  const hours = Math.floor(normalized / MINUTES_PER_HOUR);
  const rest = normalized % MINUTES_PER_HOUR;

  return `${String(hours).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
};

/** Ajoute des jours à une date, sans la muter. */
export const addDays = (date: Date, days: number): Date => {
  return addDaysFns(date, days);
};

/** Lundi 00:00 de la semaine locale qui contient `reference`. */
export const startOfLocalWeek = (reference: Date = new Date()): Date => {
  return startOfWeek(reference, { weekStartsOn: 1 });
};

/** Clé de regroupement par jour local — « 2026-09-15 ». */
export const localDayKey = (date: Date | string): string => {
  return format(typeof date === "string" ? new Date(date) : date, "yyyy-MM-dd");
};

/**
 * Le décalage local par rapport à UTC change-t-il dans les sept prochains jours ? Sert à prévenir
 * qu'un horaire récurrent va se décaler à l'écran sans que personne n'y ait touché.
 */
export const hasUpcomingOffsetShift = (reference: Date = new Date()): boolean => {
  return reference.getTimezoneOffset() !== addWeeks(reference, 1).getTimezoneOffset();
};

/** Les jours de la semaine dans l'ordre d'affichage européen, lundi en tête (0 = dimanche). */
export const WEEK_DAYS_FROM_MONDAY: number[] = [1, 2, 3, 4, 5, 6, 0];

/** Un créneau qui revient chaque semaine : un jour, une heure de début, une de fin. */
export interface WeeklySlot {
  /** 0 = dimanche, comme `Date.getDay()`. */
  dayOfWeek: number;
  /** « HH:mm ». */
  startTime: string;
  /** « HH:mm ». */
  endTime: string;
}

/** Un créneau vu comme un point dans la semaine : minutes depuis dimanche minuit, et durée. */
const toWeekMinutes = (slot: WeeklySlot): { start: number; duration: number } => {
  const startOfDayMinutes = parseTimeToMinutes(slot.startTime);

  return {
    start: slot.dayOfWeek * MINUTES_PER_DAY + startOfDayMinutes,
    duration: parseTimeToMinutes(slot.endTime) - startOfDayMinutes,
  };
};

const fromWeekMinutes = (start: number, duration: number): WeeklySlot => {
  const normalized = ((start % MINUTES_PER_WEEK) + MINUTES_PER_WEEK) % MINUTES_PER_WEEK;

  return {
    dayOfWeek: Math.floor(normalized / MINUTES_PER_DAY),
    startTime: formatMinutesToTime(normalized),
    endTime: formatMinutesToTime(normalized + duration),
  };
};

/**
 * Un créneau hebdomadaire exprimé en UTC, ramené à l'heure locale. Le décalage est celui en
 * vigueur à `reference` : un changement d'heure dans la semaine décalerait l'affichage, ce dont
 * `hasUpcomingOffsetShift` permet de prévenir.
 */
export const weeklySlotToLocal = (
  slot: WeeklySlot,
  reference: Date = new Date()
): WeeklySlot => {
  const { start, duration } = toWeekMinutes(slot);

  return fromWeekMinutes(start - reference.getTimezoneOffset(), duration);
};

/**
 * L'inverse : un créneau saisi en heure locale, exprimé en UTC. `null` si la plage est vide ou
 * inversée, ou si elle franchit minuit UTC — un créneau appartient à un seul jour côté serveur.
 */
export const weeklySlotToUtc = (
  slot: WeeklySlot,
  reference: Date = new Date()
): WeeklySlot | null => {
  const { start, duration } = toWeekMinutes(slot);
  if (duration <= 0) {
    return null;
  }

  const utcStart =
    (((start + reference.getTimezoneOffset()) % MINUTES_PER_WEEK) + MINUTES_PER_WEEK) %
    MINUTES_PER_WEEK;

  if (
    Math.floor((utcStart + duration) / MINUTES_PER_DAY) !==
    Math.floor(utcStart / MINUTES_PER_DAY)
  ) {
    return null;
  }

  return fromWeekMinutes(utcStart, duration);
};
