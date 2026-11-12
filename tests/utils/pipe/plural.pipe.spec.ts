import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { PluralTranslatePipe } from '@lib/utils/pipe/plural.pipe';

describe('PluralTranslatePipe', () => {
  const pipeFor = (locale: string): PluralTranslatePipe => {
    TestBed.configureTestingModule({ providers: [{ provide: LOCALE_ID, useValue: locale }] });
    return TestBed.runInInjectionContext(() => new PluralTranslatePipe());
  };

  it('should return singular key for 1', () => {
    expect(pipeFor('en').transform('items', 1)).toBe('items.one');
    expect(pipeFor('fr').transform('items', 1)).toBe('items.one');
  });

  it('should return plural key for 0 in English, Dutch and German', () => {
    expect(pipeFor('en').transform('items', 0)).toBe('items.plural');
  });

  it('should return plural key for 0 in Dutch', () => {
    expect(pipeFor('nl').transform('items', 0)).toBe('items.plural');
  });

  it('should return plural key for 0 in German', () => {
    expect(pipeFor('de-DE').transform('items', 0)).toBe('items.plural');
  });

  it('should return singular key for 0 in French', () => {
    expect(pipeFor('fr-BE').transform('items', 0)).toBe('items.one');
  });

  it('should return plural key for 2 and large numbers', () => {
    const pipe = pipeFor('fr');
    expect(pipe.transform('items', 2)).toBe('items.plural');
    expect(pipe.transform('items', 100)).toBe('items.plural');
  });

  it('should fall back to English rules on an unknown locale', () => {
    expect(pipeFor('not a locale').transform('items', 0)).toBe('items.plural');
  });

  it('should handle nested translation keys', () => {
    expect(pipeFor('en').transform('module.section.items', 5)).toBe('module.section.items.plural');
  });
});
