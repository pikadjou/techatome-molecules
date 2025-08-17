import { FontIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { Subject } from 'rxjs';

@Component({
selector: 'ta-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],,
  standalone: true,
  imports: [FontIconComponent],
})
export class FilterContainerComponent extends TaBaseComponent implements OnInit {
  @Input()
  form: InputBase<any>[] = [];

  @Output()
  filtersSelected = new EventEmitter<any>();

  public isFilterOpen = false;

  public askValidation$ = new Subject<null>();
  public askClear$ = new Subject<null>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    if (this.askClear$) {
      this._registerSubscription(this.askClear$.subscribe(_ => this.clear()));
    }
  }

  public apply(data: any) {
    this.filtersSelected.emit(data);
  }

  public clear() {
    this.filtersSelected.emit(null);
  }

  public validate() {
    this.askValidation$.next(null);
  }
}
