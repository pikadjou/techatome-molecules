import { InputComponent } from './component';

describe('InputComponent', () => {
  it('should create with defaults', () => {
    const input = new InputComponent({ key: 'comp', label: 'Component' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('comp');
    expect(input.label).toBe('Component');
    expect(input.controlType).toBe('component');
    expect(input.icon).toBeNull();
    expect(input.template).toBeUndefined();
  });

  it('should accept an icon', () => {
    const input = new InputComponent({ key: 'comp', icon: 'fa-cog' as any });
    expect(input.icon).toBe('fa-cog');
  });

  it('should have a selectedValue$ subject', () => {
    const input = new InputComponent({ key: 'comp' });
    expect(input.selectedValue$).toBeTruthy();
  });

  it('should update value when selectedValue$ emits', () => {
    const input = new InputComponent({ key: 'comp' });
    input.selectedValue$.next('selected-value');
    expect(input.value).toBe('selected-value');
    input.destroy();
  });

  it('should accept a value', () => {
    const input = new InputComponent({ key: 'comp', value: 'initial' });
    expect(input.value).toBe('initial');
  });

  it('should create formControl', () => {
    const input = new InputComponent({ key: 'comp' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
