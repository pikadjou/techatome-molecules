import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BehaviorSubject, of, Subject } from 'rxjs';

import { InputBase } from './base';

describe('InputBase', () => {
  afterEach(() => {
    // Ensure subjects are cleaned up
  });

  describe('instantiation with defaults', () => {
    it('should create with empty options', () => {
      const input = new InputBase({});
      expect(input).toBeTruthy();
      expect(input.label).toBe('');
      expect(input.type).toBe('');
      expect(input.message).toBe('');
      expect(input.controlType).toBe('');
      expect(input.validators).toEqual([]);
      expect(input.class).toBe('col-12');
      expect(input.children).toEqual([]);
      expect(input.disabled).toBe(false);
      expect(input.value).toBeNull();
    });

    it('should generate a random key when none provided', () => {
      const input = new InputBase({});
      expect(input.key).toBeTruthy();
      expect(typeof input.key).toBe('string');
    });
  });

  describe('instantiation with provided options', () => {
    it('should accept all basic options', () => {
      const input = new InputBase({
        key: 'myKey',
        label: 'My Label',
        type: 'text',
        message: 'Help text',
        controlType: 'textbox',
        class: 'col-6',
        disabled: true,
        value: 'hello',
      });

      expect(input.key).toBe('myKey');
      expect(input.label).toBe('My Label');
      expect(input.type).toBe('text');
      expect(input.message).toBe('Help text');
      expect(input.controlType).toBe('textbox');
      expect(input.class).toBe('col-6');
      expect(input.disabled).toBe(true);
      expect(input.value).toBe('hello');
    });

    it('should accept validators', () => {
      const input = new InputBase({
        key: 'test',
        validators: [Validators.required],
      });
      expect(input.validators.length).toBe(1);
    });

    it('should default visible$ to of(true)', (done) => {
      const input = new InputBase({ key: 'test' });
      input.visible$.subscribe((visible) => {
        expect(visible).toBe(true);
        done();
      });
    });

    it('should accept a custom visible$ observable', (done) => {
      const visible$ = of(false);
      const input = new InputBase({ key: 'test', visible$, bindStatusToVisible: false });
      input.visible$.subscribe((visible) => {
        expect(visible).toBe(false);
        done();
      });
    });
  });

  describe('value get/set', () => {
    it('should get and set value', () => {
      const input = new InputBase<string>({ key: 'test' });
      expect(input.value).toBeNull();
      input.value = 'new value';
      expect(input.value).toBe('new value');
    });

    it('should set value to null', () => {
      const input = new InputBase<string>({ key: 'test', value: 'initial' });
      expect(input.value).toBe('initial');
      input.value = null;
      expect(input.value).toBeNull();
    });

    it('should update formControl when value is set', () => {
      const input = new InputBase<string>({ key: 'test', value: 'init' });
      input.createFormControl();
      input.value = 'updated';
      expect(input.formControl?.value).toBe('updated');
    });
  });

  describe('value$', () => {
    it('should set value from value$ observable if no current value', () => {
      const value$ = new BehaviorSubject<string>('from-observable');
      const input = new InputBase<string>({ key: 'test', value$: value$ as any });
      expect(input.value).toBe('from-observable');
      input.destroy();
    });

    it('should not overwrite existing value from value$', () => {
      const value$ = new BehaviorSubject<string>('from-observable');
      const input = new InputBase<string>({ key: 'test', value: 'existing', value$: value$ as any });
      expect(input.value).toBe('existing');
      input.destroy();
    });
  });

  describe('createFormControl', () => {
    it('should create a FormControl', () => {
      const input = new InputBase<string>({ key: 'test', value: 'hello' });
      input.createFormControl();
      expect(input.formControl).toBeTruthy();
      expect(input.formControl?.value).toBe('hello');
    });

    it('should create a FormControl with validators', () => {
      const input = new InputBase<string>({
        key: 'test',
        validators: [Validators.required],
      });
      input.createFormControl();
      expect(input.formControl).toBeTruthy();
      expect(input.formControl?.valid).toBe(false);
    });

    it('should add control to group when provided', () => {
      const group = new FormGroup({});
      const input = new InputBase<string>({ key: 'myField', value: 'val' });
      input.createFormControl(group);
      expect(group.get('myField')).toBeTruthy();
      expect(group.get('myField')?.value).toBe('val');
    });

    it('should disable formControl if disabled is true', () => {
      const input = new InputBase<string>({ key: 'test', disabled: true });
      input.createFormControl();
      expect(input.formControl?.disabled).toBe(true);
    });

    it('should emit changeValue$ when formControl value changes', (done) => {
      const input = new InputBase<string>({ key: 'test' });
      input.createFormControl();
      input.changeValue$.subscribe((val) => {
        expect(val).toBe('changed');
        done();
      });
      input.formControl?.setValue('changed');
    });
  });

  describe('disable / enable', () => {
    it('should disable the formControl', () => {
      const input = new InputBase<string>({ key: 'test' });
      input.createFormControl();
      input.disable();
      expect(input.formControl?.disabled).toBe(true);
    });

    it('should enable the formControl', () => {
      const input = new InputBase<string>({ key: 'test', disabled: true });
      input.createFormControl();
      expect(input.formControl?.disabled).toBe(true);
      input.enable();
      expect(input.formControl?.disabled).toBe(false);
    });
  });

  describe('launchChangeValue', () => {
    it('should emit current value on changeValue$', (done) => {
      const input = new InputBase<string>({ key: 'test', value: 'current' });
      input.changeValue$.subscribe((val) => {
        expect(val).toBe('current');
        done();
      });
      input.launchChangeValue();
    });
  });

  describe('destroy', () => {
    it('should complete changeValue$ subject', () => {
      const input = new InputBase<string>({ key: 'test' });
      let completed = false;
      input.changeValue$.subscribe({
        complete: () => (completed = true),
      });
      input.destroy();
      expect(completed).toBe(true);
    });
  });

  describe('children handling', () => {
    it('should create form controls for children instead of self', () => {
      const child1 = new InputBase<string>({ key: 'child1', value: 'c1' });
      const child2 = new InputBase<string>({ key: 'child2', value: 'c2' });
      const parent = new InputBase<any>({ key: 'parent' });
      parent.children = [child1, child2];

      const group = new FormGroup({});
      parent.createFormControl(group);

      expect(parent.formControl).toBeUndefined();
      expect(group.get('child1')).toBeTruthy();
      expect(group.get('child2')).toBeTruthy();
    });

    it('should disable all children', () => {
      const child1 = new InputBase<string>({ key: 'child1' });
      const child2 = new InputBase<string>({ key: 'child2' });
      const parent = new InputBase<any>({ key: 'parent' });
      parent.children = [child1, child2];

      const group = new FormGroup({});
      parent.createFormControl(group);

      parent.disable();
      expect(child1.formControl?.disabled).toBe(true);
      expect(child2.formControl?.disabled).toBe(true);
    });
  });
});
