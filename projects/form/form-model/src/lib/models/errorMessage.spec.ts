import { FormGroup } from '@angular/forms';

import { FormErrorMessage } from './errorMessage';
import { InputBase } from './input/base';
import { InputLabel } from './input/label';
import { InputPanel } from './input/panel';
import { InputTextBox } from './input/textbox';

describe('FormErrorMessage', () => {
  describe('updateFormMessage', () => {
    it('should set error on matching input', () => {
      const input = new InputTextBox({ key: 'email', label: 'Email' });
      const group = new FormGroup({});
      input.createFormControl(group);

      const form: InputBase<any>[] = [input];
      FormErrorMessage.updateFormMessage(form, 'email', 'Invalid email');

      expect(input.formControl?.errors).toEqual({ message: 'Invalid email' });
    });

    it('should not affect non-matching inputs', () => {
      const input1 = new InputTextBox({ key: 'name', label: 'Name' });
      const input2 = new InputTextBox({ key: 'email', label: 'Email' });
      const group = new FormGroup({});
      input1.createFormControl(group);
      input2.createFormControl(group);

      const form: InputBase<any>[] = [input1, input2];
      FormErrorMessage.updateFormMessage(form, 'email', 'Invalid email');

      expect(input1.formControl?.errors).toBeNull();
      expect(input2.formControl?.errors).toEqual({ message: 'Invalid email' });
    });

    it('should skip InputLabel instances', () => {
      const label = new InputLabel({ key: 'info', label: 'Info' });
      const input = new InputTextBox({ key: 'name', label: 'Name' });
      const group = new FormGroup({});
      input.createFormControl(group);

      const form: (InputBase<any> | InputLabel)[] = [label, input];
      // Should not throw when encountering InputLabel
      expect(() => {
        FormErrorMessage.updateFormMessage(form as InputBase<any>[], 'name', 'Required');
      }).not.toThrow();

      expect(input.formControl?.errors).toEqual({ message: 'Required' });
    });

    it('should search inside InputPanel children', () => {
      const child = new InputTextBox({ key: 'nested', label: 'Nested' });
      const panel = new InputPanel({
        key: 'panel',
        label: 'Panel',
        children: [child],
      });
      const group = new FormGroup({});
      panel.createFormControl(group);

      const form: InputBase<any>[] = [panel];
      FormErrorMessage.updateFormMessage(form, 'nested', 'Error on nested');

      expect(child.formControl?.errors).toEqual({ message: 'Error on nested' });
    });

    it('should search deeply nested panels', () => {
      const deepChild = new InputTextBox({ key: 'deep', label: 'Deep' });
      const innerPanel = new InputPanel({
        key: 'inner',
        label: 'Inner',
        children: [deepChild],
      });
      const outerPanel = new InputPanel({
        key: 'outer',
        label: 'Outer',
        children: [innerPanel],
      });
      const group = new FormGroup({});
      outerPanel.createFormControl(group);

      const form: InputBase<any>[] = [outerPanel];
      FormErrorMessage.updateFormMessage(form, 'deep', 'Deep error');

      expect(deepChild.formControl?.errors).toEqual({ message: 'Deep error' });
    });

    it('should handle empty form array', () => {
      expect(() => {
        FormErrorMessage.updateFormMessage([], 'key', 'msg');
      }).not.toThrow();
    });
  });
});
