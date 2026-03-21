import { of } from 'rxjs';

import { InputChoices, InputChoicesOption } from './choices';

describe('InputChoices', () => {
  it('should create with defaults', () => {
    const input = new InputChoices({ key: 'tags', label: 'Tags' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('tags');
    expect(input.label).toBe('Tags');
    expect(input.controlType).toBe('choices');
    expect(input.onlyTemplate).toBeUndefined();
    expect(input.advancedSearch$).toBeNull();
    expect(input.choiceTemplate).toBeUndefined();
    expect(input.showNullableFields).toBe(false);
  });

  it('should extend InputDropdown with controlType "choices"', () => {
    const input = new InputChoices({});
    expect(input.controlType).toBe('choices');
    expect(input.multiple).toBe(false);
  });

  it('should accept options$ with InputChoicesOption type', (done) => {
    const options: InputChoicesOption[] = [
      { id: '1', name: 'Tag1', data: { color: 'red' } },
      { id: '2', name: 'Tag2', data: { color: 'blue' } },
    ];
    const input = new InputChoices({ key: 'tags', options$: of(options) });
    input.options$.subscribe((opts) => {
      expect(opts.length).toBe(2);
      expect(opts[0].data).toEqual({ color: 'red' });
      done();
    });
  });

  it('should accept onlyTemplate option', () => {
    const input = new InputChoices({ key: 'tags', onlyTemplate: true });
    expect(input.onlyTemplate).toBe(true);
  });

  it('should accept advancedSearch$ function', () => {
    const searchFn = (search?: string) => of([]);
    const input = new InputChoices({ key: 'tags', advancedSearch$: searchFn });
    expect(input.advancedSearch$).toBe(searchFn);
  });

  it('should accept showNullableFields option', () => {
    const input = new InputChoices({ key: 'tags', showNullableFields: true });
    expect(input.showNullableFields).toBe(true);
  });

  it('should accept a value (string array)', () => {
    const input = new InputChoices({ key: 'tags', value: ['1', '2'] });
    expect(input.value).toEqual(['1', '2']);
  });

  it('should create formControl', () => {
    const input = new InputChoices({ key: 'tags', value: ['a'] });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toEqual(['a']);
  });
});
