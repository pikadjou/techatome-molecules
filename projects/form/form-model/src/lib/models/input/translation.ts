import { FormGroup } from '@angular/forms';

import { Culture } from '@camelot/utils';

import { IInputDynamic, InputDynamic } from './dynamic';

export interface IInputTranslation extends IInputDynamic {
  mainCulture?: Culture;
}

export class InputTranslation extends InputDynamic {
  mainCulture: Culture | null;

  constructor(options: IInputTranslation) {
    super(options);
    this.controlType = 'translation';

    this.firstRender = false;
    this.composedKeyForGroup = false;
    this.mainCulture = options.mainCulture ?? null;
  }

  public override add(culture: string) {
    super.add(culture);
  }
  public override createFormControl(group: FormGroup) {
    super.createFormControl(group);

    this._fill();
  }

  private _fill() {
    if (this.mainCulture) {
      this.add(Culture[this.mainCulture]);
    }

    for (const key of Object.keys(this.value)) {
      this.add(key);
    }
  }
}
