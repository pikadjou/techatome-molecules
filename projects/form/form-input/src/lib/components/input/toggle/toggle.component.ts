import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputCheckBox } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';

import { TaAbstractInputComponent } from '../../abstract.component';
import { FormLabelComponent } from '../../label/label.component';

@Component({
  selector: 'ta-input-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  standalone: true,
  imports: [FormLabelComponent, ReactiveFormsModule, TranslatePipe],
})
export class ToggleComponent extends TaAbstractInputComponent<InputCheckBox, boolean> {
  /** Nom de l'état courant, si `onLabel` / `offLabel` sont définis. */
  public stateLabel(): string | null {
    return (this.input.value ? this.input.onLabel : this.input.offLabel) ?? null;
  }

  constructor() {
    super();
  }
}
