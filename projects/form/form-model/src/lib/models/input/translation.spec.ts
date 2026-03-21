import { FormGroup } from '@angular/forms';

import { InputTranslation } from './translation';

describe('InputTranslation', () => {
  it('should create with required options', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Translation',
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    expect(input).toBeTruthy();
    expect(input.key).toBe('trans');
    expect(input.label).toBe('Translation');
    expect(input.controlType).toBe('translation');
    expect(input.firstRender).toBe(false);
    expect(input.composedKeyForGroup).toBe(false);
    expect(input.mainCulture).toBeNull();
  });

  it('should accept mainCulture', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Translation',
      mainCulture: 1,
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    expect(input.mainCulture).toBe(1);
  });

  it('should set firstRender to false', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Trans',
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    expect(input.firstRender).toBe(false);
  });

  it('should set composedKeyForGroup to false', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Trans',
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    expect(input.composedKeyForGroup).toBe(false);
  });

  it('should create formControl as FormGroup', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Trans',
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);
    expect(input.formControl).toBeTruthy();
    expect(input.formControl instanceof FormGroup).toBe(true);
    expect(group.get('trans')).toBeTruthy();
  });

  it('should fill groups from value keys on createFormControl', () => {
    const input = new InputTranslation({
      key: 'trans',
      label: 'Trans',
      value: { '1': { text: 'Hello' }, '2': { text: 'Bonjour' } },
      template: [
        { type: 'InputTextBox', options: { key: 'text', label: 'Text' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);
    expect(Object.keys(input.inputsGroup).length).toBeGreaterThanOrEqual(2);
  });
});
