import { Component } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'ta-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public isFilterOpen = false;

  public askValidation$ = new Subject<null>();

  public changeFilterOpen() {
    if (this.isFilterOpen) {
      this.askValidation$.next(null);
    }
    this.isFilterOpen = !this.isFilterOpen;
  }
}
