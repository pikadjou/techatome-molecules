import { InputFactory } from './factory';
import { InputCheckBox } from './input/checkbox';
import { InputColorPicker } from './input/colorPicker';
import { InputDropdown } from './input/dropdown';
import { InputImages } from './input/images';
import { InputLabel } from './input/label';
import { InputLogo } from './input/logo';
import { InputNumber } from './input/number';
import { InputPanel } from './input/panel';
import { InputRadio } from './input/radio';
import { InputSchema } from './input/schema';
import { InputTextarea } from './input/textarea';
import { InputTextBox } from './input/textbox';
import { InputUpload } from './input/upload';
import { InputWysiswyg } from './input/wysiswyg';

describe('InputFactory', () => {
  const baseOptions = { key: 'test', label: 'Test' };

  it('should create InputCheckBox', () => {
    const input = InputFactory.getInput('InputCheckBox', baseOptions);
    expect(input instanceof InputCheckBox).toBe(true);
    expect(input.controlType).toBe('checkbox');
  });

  it('should create InputRadio', () => {
    const input = InputFactory.getInput('InputRadio', baseOptions);
    expect(input instanceof InputRadio).toBe(true);
    expect(input.controlType).toBe('radio');
  });

  it('should create InputColorPicker', () => {
    const input = InputFactory.getInput('InputColorPicker', baseOptions);
    expect(input instanceof InputColorPicker).toBe(true);
    expect(input.controlType).toBe('colorPicker');
  });

  it('should create InputDropdown', () => {
    const input = InputFactory.getInput('InputDropdown', baseOptions);
    expect(input instanceof InputDropdown).toBe(true);
    expect(input.controlType).toBe('dropdown');
  });

  it('should create InputImages', () => {
    const input = InputFactory.getInput('InputImages', baseOptions);
    expect(input instanceof InputImages).toBe(true);
    expect(input.controlType).toBe('images');
  });

  it('should create InputLabel', () => {
    const input = InputFactory.getInput('InputLabel', baseOptions);
    expect(input instanceof InputLabel).toBe(true);
    expect(input.controlType).toBe('label');
  });

  it('should create InputLogo', () => {
    const input = InputFactory.getInput('InputLogo', baseOptions);
    expect(input instanceof InputLogo).toBe(true);
    expect(input.controlType).toBe('logo');
  });

  it('should create InputNumber', () => {
    const input = InputFactory.getInput('InputNumber', baseOptions);
    expect(input instanceof InputNumber).toBe(true);
    expect(input.type).toBe('number');
  });

  it('should create InputPanel', () => {
    const input = InputFactory.getInput('InputPanel', baseOptions);
    expect(input instanceof InputPanel).toBe(true);
    expect(input.controlType).toBe('panel');
  });

  it('should create InputSchema', () => {
    const input = InputFactory.getInput('InputSchema', baseOptions);
    expect(input instanceof InputSchema).toBe(true);
    expect(input.controlType).toBe('schema');
  });

  it('should create InputTextarea', () => {
    const input = InputFactory.getInput('InputTextarea', baseOptions);
    expect(input instanceof InputTextarea).toBe(true);
    expect(input.controlType).toBe('textarea');
  });

  it('should create InputTextBox', () => {
    const input = InputFactory.getInput('InputTextBox', baseOptions);
    expect(input instanceof InputTextBox).toBe(true);
    expect(input.controlType).toBe('textbox');
  });

  it('should create InputWysiswyg', () => {
    const input = InputFactory.getInput('InputWysiswyg', baseOptions);
    expect(input instanceof InputWysiswyg).toBe(true);
    expect(input.controlType).toBe('wysiswyg');
  });

  it('should create InputUpload', () => {
    const input = InputFactory.getInput('InputUpload', baseOptions);
    expect(input instanceof InputUpload).toBe(true);
    expect(input.controlType).toBe('upload');
  });

  it('should default to InputTextBox for unknown type', () => {
    const input = InputFactory.getInput('UnknownType' as any, baseOptions);
    expect(input instanceof InputTextBox).toBe(true);
  });

  it('should pass options to created input', () => {
    const input = InputFactory.getInput('InputTextBox', {
      key: 'myKey',
      label: 'My Label',
      value: 'myValue',
    });
    expect(input.key).toBe('myKey');
    expect(input.label).toBe('My Label');
    expect(input.value).toBe('myValue');
  });

  it('should call templateChildren if provided', () => {
    const childInput = new InputTextBox({ key: 'child', label: 'Child' });
    const templateChildren = jasmine.createSpy('templateChildren').and.returnValue([childInput]);
    const input = InputFactory.getInput('InputPanel', {
      key: 'panel',
      label: 'Panel',
      templateChildren,
    });
    expect(templateChildren).toHaveBeenCalled();
    expect(input.children.length).toBe(1);
    expect(input.children[0].key).toBe('child');
  });
});
