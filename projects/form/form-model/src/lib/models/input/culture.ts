import { of } from 'rxjs';

import { Culture, extractEnum } from '@ta/utils';

import { IInputDropdown, InputDropdown } from './dropdown';

export interface IInputCulture extends Omit<IInputDropdown<string>, 'options'> {}

export class InputCulture extends InputDropdown<string> {
  override controlType = 'culture';

  constructor(options: IInputCulture = {}) {
    super({
      ...options,
      options$: of(
        extractEnum(Culture, true).map(item => ({
          id: item.value.toString(),
          name: 'ui.culture.long.' + item.value,
        }))
      ),
    });
  }
}
