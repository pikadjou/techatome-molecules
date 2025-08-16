import { differenceInMinutes, isValid, parseISO } from 'date-fns';

export const toLocalDateString = (utcDateString: string): string => {
  return toLocalDate(utcDateString).toString();
};

export const toLocalDate = (utcDateString: string): Date => {
  const utcDate = new Date(utcDateString);
  return new Date(utcDate.getTime() - utcDate.getTimezoneOffset() * 60 * 1000);
};

export const toUtcDate = (localDateString: Date): Date => {
  return new Date(localDateString.getTime() - localDateString.getTimezoneOffset() * 60 * 1000);
};

export const diffInHourAndMinutes = (start: string, end: string): { h: string; m: string } => {
  const diff = differenceInMinutes(new Date(end), new Date(start));

  const hours = Math.floor(diff / 60);
  const minutes = Math.round(diff - hours * 60);

  return {
    h: hours.toString().padStart(2, '0'),
    m: minutes.toString().padStart(2, '0'),
  };
};

export const isStrictISODateString = (value: string) => {
  // Vérifie le format complet ISO 8601 (YYYY-MM-DD ou YYYY-MM-DDTHH:mm:ss.sssZ)
  const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?(Z|([+-]\d{2}:\d{2})))?$/;

  if (!isoRegex.test(value)) return false;

  const date = parseISO(value);
  return isValid(date) && value === date.toISOString().slice(0, value.length);
};
