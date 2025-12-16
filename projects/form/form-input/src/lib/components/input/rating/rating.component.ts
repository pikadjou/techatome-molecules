import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputRating } from '@ta/form-model';
import { RatingComponent as TaRatingComponent } from '@ta/ui';

import { TaAbstractInputComponent } from '../../abstract.component';
import { InputLayoutComponent } from '../../input-layout/input-layout.component';

@Component({
  selector: 'ta-input-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, InputLayoutComponent, TaRatingComponent],
})
export class RatingComponent extends TaAbstractInputComponent<InputRating, number> implements OnInit {
  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  public onRatingChange(value: number): void {
    this.input.formControl?.setValue(value);
    this.onChange(value);
  }
}
