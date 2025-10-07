import { IInputTranslation, InputTranslation } from './translation';

export interface IInputDynamicTranslation extends IInputTranslation {}

export class InputDynamicTranslation extends InputTranslation {
  static untransformValue(transformedValue: Record<number, { InputTextBox: string }>): Record<number, string> {
    return Object.entries(transformedValue).reduce<Record<number, string>>((acc, [culture, obj]) => {
      acc[Number(culture)] = obj.InputTextBox;
      return acc;
    }, {});
  }
  constructor(options: IInputDynamicTranslation) {
    super(options);

    this.template = [
      {
        type: 'InputTextBox',
        options: {
          key: 'InputTextBox',
          label: this.label,
          class: 'pb-2',
        },
      },
    ];

    this.value = this.value ? this._transformedValue(this.value) : [];
  }

  private _transformedValue(originalValue: { [index: string]: any }) {
    return Object.entries(originalValue).reduce<Record<string, { InputTextBox: string }>>((acc, [culture, text]) => {
      acc[culture] = {
        InputTextBox: text,
      };
      return acc;
    }, {});
  }
}
