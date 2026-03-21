import { of } from 'rxjs';

import { InputLogo } from './logo';

describe('InputLogo', () => {
  it('should create with defaults', () => {
    const input = new InputLogo({ key: 'logo', label: 'Logo' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('logo');
    expect(input.label).toBe('Logo');
    expect(input.controlType).toBe('logo');
    expect(input.availableFile$).toBeNull();
    expect(input.update).toBeNull();
    expect(input.fileDeleted).toBeUndefined();
    expect(input.removeFile$).toBeNull();
  });

  it('should accept availableFile$ observable', () => {
    const file$ = of({} as any);
    const input = new InputLogo({ key: 'logo', availableFile$: file$ });
    expect(input.availableFile$).toBe(file$);
  });

  it('should accept update function', () => {
    const updateFn = async (data: any) => ({} as any);
    const input = new InputLogo({ key: 'logo', update: updateFn });
    expect(input.update).toBe(updateFn);
  });

  it('should accept onFileDeleted callback', () => {
    const callback = jasmine.createSpy('onFileDeleted');
    const input = new InputLogo({ key: 'logo', onFileDeleted: callback });
    expect(input.fileDeleted).toBe(callback);
  });

  it('should accept removeFile$ observable', () => {
    const removeFile$ = of({} as any);
    const input = new InputLogo({ key: 'logo', removeFile$ });
    expect(input.removeFile$).toBe(removeFile$);
  });

  it('should accept a string value', () => {
    const input = new InputLogo({ key: 'logo', value: 'http://example.com/logo.png' });
    expect(input.value).toBe('http://example.com/logo.png');
  });

  it('should create formControl', () => {
    const input = new InputLogo({ key: 'logo' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
