import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';

import { InputBase } from '@camelot/form-model';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent
  extends CamBaseComponent
  implements OnInit
{
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
      this._registerSubscription(this.askClear$.subscribe((_) => this.clear()));
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
