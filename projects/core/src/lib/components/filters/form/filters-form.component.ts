import { Component, EventEmitter, Output, input } from '@angular/core';

import { Observable } from 'rxjs';

import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { TaTranslationCore } from '../../../translation.service';

@Component({
  selector: 'ta-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss'],
  standalone: true,
  imports: [ButtonComponent, FormComponent, TranslatePipe],
})
export class FiltersFormComponent extends TaBaseComponent {
  form = input<InputBase<any>[]>([]);

  askValidation$ = input.required<Observable<null>>();

  @Output()
  filtersSelected = new EventEmitter<any>();

  constructor() {
    super();
    TaTranslationCore.getInstance();
  }

  public apply(data: any) {
    this.filtersSelected.emit(data);
  }

  public clear() {
    this.filtersSelected.emit(null);
  }
}
