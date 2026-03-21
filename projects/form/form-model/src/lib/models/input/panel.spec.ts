import { FormGroup, Validators } from '@angular/forms';

import { InputBase } from './base';
import { InputPanel } from './panel';
import { InputTextBox } from './textbox';

describe('InputPanel', () => {
  it('should create with minimal options', () => {
    const input = new InputPanel({ key: 'info', label: 'Information' });
    expect(input).toBeTruthy();
    expect(input.key).toBe('info');
    expect(input.label).toBe('Information');
    expect(input.controlType).toBe('panel');
    expect(input.containerClass).toEqual([]);
    expect(input.contentClass).toBe('');
    expect(input.children).toEqual([]);
    expect(input.icon).toBeUndefined();
    expect(input.required).toBeUndefined();
    expect(input.level).toBe(2);
  });

  it('should accept containerClass', () => {
    const input = new InputPanel({
      key: 'info',
      label: 'Info',
      containerClass: ['highlight-title', 'with-separator'],
    });
    expect(input.containerClass).toEqual(['highlight-title', 'with-separator']);
  });

  it('should accept contentClass', () => {
    const input = new InputPanel({
      key: 'info',
      label: 'Info',
      contentClass: 'flex-column g-space-md',
    });
    expect(input.contentClass).toBe('flex-column g-space-md');
  });

  it('should accept children', () => {
    const children = [
      new InputTextBox({ key: 'name', label: 'Name' }),
      new InputTextBox({ key: 'email', label: 'Email' }),
    ];
    const input = new InputPanel({
      key: 'info',
      label: 'Info',
      children,
    });
    expect(input.children.length).toBe(2);
    expect(input.children[0].key).toBe('name');
    expect(input.children[1].key).toBe('email');
  });

  it('should accept icon', () => {
    const input = new InputPanel({ key: 'info', label: 'Info', icon: 'fa-user' });
    expect(input.icon).toBe('fa-user');
  });

  it('should accept required', () => {
    const input = new InputPanel({ key: 'info', label: 'Info', required: true });
    expect(input.required).toBe(true);
  });

  it('should accept level', () => {
    const input = new InputPanel({ key: 'info', label: 'Info', level: 3 });
    expect(input.level).toBe(3);
  });

  it('should default level to 2', () => {
    const input = new InputPanel({ key: 'info', label: 'Info' });
    expect(input.level).toBe(2);
  });

  it('should create form controls for children', () => {
    const child1 = new InputTextBox({ key: 'firstName', value: 'John' });
    const child2 = new InputTextBox({ key: 'lastName', value: 'Doe' });
    const panel = new InputPanel({
      key: 'person',
      label: 'Person',
      children: [child1, child2],
    });

    const group = new FormGroup({});
    panel.createFormControl(group);

    expect(group.get('firstName')).toBeTruthy();
    expect(group.get('lastName')).toBeTruthy();
    expect(group.get('firstName')?.value).toBe('John');
    expect(group.get('lastName')?.value).toBe('Doe');
  });

  it('should disable all children', () => {
    const child1 = new InputTextBox({ key: 'f1' });
    const child2 = new InputTextBox({ key: 'f2' });
    const panel = new InputPanel({
      key: 'p',
      label: 'P',
      children: [child1, child2],
    });

    const group = new FormGroup({});
    panel.createFormControl(group);
    panel.disable();

    expect(child1.formControl?.disabled).toBe(true);
    expect(child2.formControl?.disabled).toBe(true);
  });

  it('should enable all children', () => {
    const child1 = new InputTextBox({ key: 'f1', disabled: true });
    const child2 = new InputTextBox({ key: 'f2', disabled: true });
    const panel = new InputPanel({
      key: 'p',
      label: 'P',
      children: [child1, child2],
    });

    const group = new FormGroup({});
    panel.createFormControl(group);
    panel.enable();

    expect(child1.formControl?.disabled).toBe(false);
    expect(child2.formControl?.disabled).toBe(false);
  });

  it('should work with nested panels', () => {
    const innerChild = new InputTextBox({ key: 'deep', value: 'nested' });
    const innerPanel = new InputPanel({
      key: 'inner',
      label: 'Inner',
      children: [innerChild],
    });
    const outerPanel = new InputPanel({
      key: 'outer',
      label: 'Outer',
      children: [innerPanel],
    });

    const group = new FormGroup({});
    outerPanel.createFormControl(group);

    expect(group.get('deep')).toBeTruthy();
    expect(group.get('deep')?.value).toBe('nested');
  });
});
