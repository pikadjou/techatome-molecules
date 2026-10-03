import {
  toLocalDateString,
  toLocalDate,
  toUtcDate,
  addDays,
  diffInHourAndMinutes,
  formatMinutesToTime,
  isStrictISODateString,
  localDayKey,
  parseTimeToMinutes,
  startOfLocalWeek,
  weeklySlotToLocal,
  weeklySlotToUtc,
} from '@lib/utils/utils/date';

describe('date utils', () => {
  describe('toLocalDate', () => {
    it('should return a Date object', () => {
      const result = toLocalDate('2024-01-15T12:00:00Z');
      expect(result instanceof Date).toBe(true);
    });
  });

  describe('toLocalDateString', () => {
    it('should return a string', () => {
      const result = toLocalDateString('2024-01-15T12:00:00Z');
      expect(typeof result).toBe('string');
    });
  });

  describe('toUtcDate', () => {
    it('should return a Date object', () => {
      const localDate = new Date(2024, 0, 15, 12, 0, 0);
      const result = toUtcDate(localDate);
      expect(result instanceof Date).toBe(true);
    });
  });

  describe('diffInHourAndMinutes', () => {
    it('should calculate difference of 1 hour', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T11:00:00Z'
      );
      expect(result.h).toBe('01');
      expect(result.m).toBe('00');
    });

    it('should calculate difference of 2 hours and 30 minutes', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T12:30:00Z'
      );
      expect(result.h).toBe('02');
      expect(result.m).toBe('30');
    });

    it('should calculate zero difference', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T10:00:00Z'
      );
      expect(result.h).toBe('00');
      expect(result.m).toBe('00');
    });

    it('should pad single-digit values with zero', () => {
      const result = diffInHourAndMinutes(
        '2024-01-15T10:00:00Z',
        '2024-01-15T10:05:00Z'
      );
      expect(result.h).toBe('00');
      expect(result.m).toBe('05');
    });
  });

  describe('isStrictISODateString', () => {
    it('should return true for valid ISO date-time string', () => {
      expect(isStrictISODateString('2024-01-15T12:00:00.000Z')).toBe(true);
    });

    it('should return false for invalid date string', () => {
      expect(isStrictISODateString('not-a-date')).toBe(false);
    });

    it('should return false for partial date formats', () => {
      expect(isStrictISODateString('2024-01')).toBe(false);
    });

    it('should return false for plain number strings', () => {
      expect(isStrictISODateString('12345')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isStrictISODateString('')).toBe(false);
    });
  });

  describe('parseTimeToMinutes', () => {
    it('should read a time as minutes since midnight', () => {
      expect(parseTimeToMinutes('09:30')).toBe(570);
      expect(parseTimeToMinutes('00:00')).toBe(0);
      expect(parseTimeToMinutes('23:59')).toBe(1439);
    });

    it('should accept a single-digit hour and surrounding spaces', () => {
      expect(parseTimeToMinutes(' 9:05 ')).toBe(545);
    });

    it('should fall back to midnight for a malformed or absent value', () => {
      expect(parseTimeToMinutes('9h05')).toBe(0);
      expect(parseTimeToMinutes(null)).toBe(0);
      expect(parseTimeToMinutes(undefined)).toBe(0);
    });
  });

  describe('formatMinutesToTime', () => {
    it('should write minutes back as a padded time', () => {
      expect(formatMinutesToTime(570)).toBe('09:30');
      expect(formatMinutesToTime(0)).toBe('00:00');
    });

    it('should wrap around the day rather than run past it', () => {
      expect(formatMinutesToTime(1440)).toBe('00:00');
      expect(formatMinutesToTime(1500)).toBe('01:00');
      expect(formatMinutesToTime(-60)).toBe('23:00');
    });

    it('should be the inverse of parseTimeToMinutes', () => {
      expect(formatMinutesToTime(parseTimeToMinutes('17:45'))).toBe('17:45');
    });
  });

  describe('addDays', () => {
    it('should add days without mutating the given date', () => {
      const date = new Date(2026, 8, 15);
      const next = addDays(date, 3);

      expect(next.getDate()).toBe(18);
      expect(date.getDate()).toBe(15);
    });

    it('should walk backwards with a negative count', () => {
      expect(addDays(new Date(2026, 8, 15), -1).getDate()).toBe(14);
    });
  });

  describe('startOfLocalWeek', () => {
    it('should return the monday of the week, at midnight', () => {
      // 2026-09-17 est un jeudi.
      const monday = startOfLocalWeek(new Date(2026, 8, 17, 15, 30));

      expect(monday.getDay()).toBe(1);
      expect(monday.getDate()).toBe(14);
      expect(monday.getHours()).toBe(0);
    });

    it('should keep a monday as it is', () => {
      expect(startOfLocalWeek(new Date(2026, 8, 14, 9, 0)).getDate()).toBe(14);
    });
  });

  describe('localDayKey', () => {
    it('should key a date by its local day', () => {
      expect(localDayKey(new Date(2026, 8, 5))).toBe('2026-09-05');
    });
  });

  describe('weeklySlotToUtc', () => {
    const slot = { dayOfWeek: 3, startTime: '10:00', endTime: '12:00' };

    it('should refuse an empty or reversed range', () => {
      expect(weeklySlotToUtc({ ...slot, endTime: '10:00' })).toBeNull();
      expect(weeklySlotToUtc({ ...slot, endTime: '09:00' })).toBeNull();
    });

    it('should keep the duration of the slot', () => {
      const utc = weeklySlotToUtc(slot);

      expect(utc).not.toBeNull();
      expect(
        parseTimeToMinutes(utc!.endTime) - parseTimeToMinutes(utc!.startTime)
      ).toBe(120);
    });

    it('should refuse a range that would straddle midnight UTC', () => {
      // Le cas dépend du décalage local : on choisit une plage qui le franchit à coup sûr.
      const offset = new Date().getTimezoneOffset();
      const straddling = {
        dayOfWeek: 3,
        startTime: formatMinutesToTime(-offset - 30),
        endTime: formatMinutesToTime(-offset + 30),
      };

      expect(weeklySlotToUtc(straddling)).toBeNull();
    });
  });

  describe('weeklySlotToLocal', () => {
    it('should be the inverse of weeklySlotToUtc', () => {
      const local = { dayOfWeek: 2, startTime: '14:00', endTime: '16:30' };
      const utc = weeklySlotToUtc(local);

      expect(utc).not.toBeNull();
      expect(weeklySlotToLocal(utc!)).toEqual(local);
    });

    it('should move the slot by the local offset, wrapping the week', () => {
      const offset = new Date().getTimezoneOffset();
      const utc = { dayOfWeek: 0, startTime: '00:00', endTime: '01:00' };
      const local = weeklySlotToLocal(utc);
      const expectedMinutes = ((-offset % 10080) + 10080) % 10080;

      expect(local.dayOfWeek).toBe(Math.floor(expectedMinutes / 1440));
      expect(local.startTime).toBe(formatMinutesToTime(expectedMinutes));
    });
  });
});
