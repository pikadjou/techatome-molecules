import { of } from 'rxjs';

import { InputImages } from './images';

describe('InputImages', () => {
  it('should create with defaults', () => {
    const input = new InputImages({ key: 'photos', label: 'Photos' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('photos');
    expect(input.label).toBe('Photos');
    expect(input.controlType).toBe('images');
    expect(input.files$).toBeNull();
    expect(input.update).toBeNull();
    expect(input.fileDeleted).toBeUndefined();
    expect(input.removeFile$).toBeNull();
  });

  it('should accept files$ observable', () => {
    const files$ = of([]);
    const input = new InputImages({ key: 'photos', files$ });
    expect(input.files$).toBe(files$);
  });

  it('should accept update function', () => {
    const updateFn = async (data: any) => [];
    const input = new InputImages({ key: 'photos', update: updateFn });
    expect(input.update).toBe(updateFn);
  });

  it('should accept onFileDeleted callback', () => {
    const callback = jasmine.createSpy('onFileDeleted');
    const input = new InputImages({ key: 'photos', onFileDeleted: callback });
    expect(input.fileDeleted).toBe(callback);
  });

  it('should accept removeFile$ observable', () => {
    const removeFile$ = of({} as any);
    const input = new InputImages({ key: 'photos', removeFile$ });
    expect(input.removeFile$).toBe(removeFile$);
  });

  it('should accept a value', () => {
    const docs = [{ id: '1', url: 'http://example.com/img.jpg' }];
    const input = new InputImages({ key: 'photos', value: docs as any });
    expect(input.value).toEqual(docs as any);
  });

  it('should create formControl', () => {
    const input = new InputImages({ key: 'photos' });
    input.createFormControl();
    expect(input.formControl).toBeTruthy();
  });
});
