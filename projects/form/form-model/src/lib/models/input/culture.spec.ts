import { InputCulture } from './culture';

describe('InputCulture', () => {
  it('should create with defaults', () => {
    const input = new InputCulture({ key: 'culture', label: 'Culture' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('culture');
    expect(input.label).toBe('Culture');
    expect(input.controlType).toBe('culture');
  });

  it('should extend InputDropdown', () => {
    const input = new InputCulture({ key: 'culture' });
    expect(input.multiple).toBe(false);
    expect(input.width).toBe('100%');
  });

  it('should have options$ populated from Culture enum', (done) => {
    const input = new InputCulture({ key: 'culture' });
    input.options$.subscribe((opts) => {
      expect(opts).toBeTruthy();
      expect(opts.length).toBeGreaterThan(0);
      // Each option should have id and name
      for (const opt of opts) {
        expect(opt.id).toBeTruthy();
        expect(opt.name).toContain('ui.culture.long.');
      }
      done();
    });
  });

  it('should accept a value', () => {
    const input = new InputCulture({ key: 'culture', value: 'fr' });
    expect(input.value).toBe('fr');
  });

  it('should create formControl', () => {
    const input = new InputCulture({ key: 'culture' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
