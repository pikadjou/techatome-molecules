import { FormGroup } from '@angular/forms';

import { InputDynamic } from './dynamic';
import { InputTextBox } from './textbox';

describe('InputDynamic', () => {
  it('should create with defaults', () => {
    const input = new InputDynamic({ key: 'dyn', label: 'Dynamic' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('dyn');
    expect(input.label).toBe('Dynamic');
    expect(input.controlType).toBe('dynamic');
    expect(input.inputsGroup).toEqual({});
    expect(input.template).toEqual([]);
    expect(input.firstRender).toBe(true);
    expect(input.composedKeyForGroup).toBe(true);
  });

  it('should accept inputsGroup', () => {
    const child = new InputTextBox({ key: 'name', value: 'test' });
    const input = new InputDynamic({
      key: 'dyn',
      inputsGroup: { group1: [child] },
    });
    expect(Object.keys(input.inputsGroup).length).toBe(1);
    expect(input.inputsGroup['group1'][0].key).toBe('name');
  });

  it('should accept template', () => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'name', label: 'Name' } },
      ],
    });
    expect(input.template.length).toBe(1);
    expect(input.template[0].type).toBe('InputTextBox');
  });

  it('should have a listChanged$ subject', () => {
    const input = new InputDynamic({ key: 'dyn' });
    expect(input.listChanged$).toBeTruthy();
  });

  it('should create formControl as FormGroup', () => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);
    expect(input.formControl).toBeTruthy();
    expect(input.formControl instanceof FormGroup).toBe(true);
    expect(group.get('dyn')).toBeTruthy();
  });

  it('should auto-add one group on first render when template exists', () => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);
    // firstRender=true + template exists + no inputsGroup keys => should auto-add one
    expect(Object.keys(input.inputsGroup).length).toBe(1);
  });

  it('should add a new group via add()', () => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);

    const initialCount = Object.keys(input.inputsGroup).length;
    input.add();
    expect(Object.keys(input.inputsGroup).length).toBe(initialCount + 1);
  });

  it('should remove a group via remove()', () => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);

    const keys = Object.keys(input.inputsGroup);
    expect(keys.length).toBeGreaterThan(0);

    input.remove(keys[0]);
    expect(input.inputsGroup[keys[0]]).toBeUndefined();
  });

  it('should emit listChanged$ on add', (done) => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);

    input.listChanged$.subscribe(() => {
      done();
    });
    input.add();
  });

  it('should emit listChanged$ on remove', (done) => {
    const input = new InputDynamic({
      key: 'dyn',
      template: [
        { type: 'InputTextBox', options: { key: 'field', label: 'Field' } },
      ],
    });
    const group = new FormGroup({});
    input.createFormControl(group);

    const key = Object.keys(input.inputsGroup)[0];
    input.listChanged$.subscribe(() => {
      done();
    });
    input.remove(key);
  });
});
