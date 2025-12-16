import { Component, OnInit } from '@angular/core';

import { StarRatingModule } from 'angular-star-rating';

import { InputRating } from '@ta/form-model';

import { TaAbstractInputComponent } from '../../abstract.component';

@Component({
  selector: 'ta-input-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [StarRatingModule],
})
export class RatingComponent extends TaAbstractInputComponent<InputRating> implements OnInit {
  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
  }
}
