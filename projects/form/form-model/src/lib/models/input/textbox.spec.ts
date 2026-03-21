import { InputTextBox } from './textbox';

describe('InputTextBox', () => {
  it('should create with defaults', () => {
    const input = new InputTextBox({ key: 'test', label: 'Test' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('test');
    expect(input.label).toBe('Test');
    expect(input.controlType).toBe('textbox');
    expect(input.type).toBe('text');
    expect(input.icon).toBeNull();
    expect(input.iconClicked).toBeUndefined();
  });

  it('should accept a value', () => {
    const input = new InputTextBox({ key: 'test', label: 'Test', value: 'hello' });
    expect(input.value).toBe('hello');
  });

  it('should accept a custom type', () => {
    const input = new InputTextBox({ key: 'test', label: 'Test', type: 'url' });
    expect(input.type).toBe('url');
  });

  it('should accept an icon', () => {
    const input = new InputTextBox({ key: 'test', label: 'Test', icon: 'fa-search' as any });
    expect(input.icon).toBe('fa-search');
  });

  it('should accept an iconClicked callback', () => {
    const callback = jasmine.createSpy('iconClicked');
    const input = new InputTextBox({ key: 'test', label: 'Test', iconClicked: callback });
    expect(input.iconClicked).toBe(callback);
    input.iconClicked!();
    expect(callback).toHaveBeenCalled();
  });

  it('should have controlType "textbox"', () => {
    const input = new InputTextBox({});
    expect(input.controlType).toBe('textbox');
  });

  it('should create formControl', () => {
    const input = new InputTextBox({ key: 'name', value: 'John' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
    expect(input.formControl?.value).toBe('John');
  });
});
