import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { InputTextBox } from '@ta/form-model';
import { Observable, map, startWith } from 'rxjs';

import { Template } from '../../../../services/dto/template';

@Component({
  selector: 'ta-choice-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ChoiceListComponent implements OnInit, OnDestroy {
  @Input()
  list!: Template[];

  @Output()
  hovered = new EventEmitter<Template>();

  @Output()
  selected = new EventEmitter<Template>();

  public highlighted: Template | null = null;
  public inputSearch = new InputTextBox();

  public filteredList$: Observable<Template[]> | null = null;

  constructor() {
    this.inputSearch.createFormControl();
  }

  ngOnInit() {
    this.filteredList$ = this.inputSearch.changeValue$.pipe(
      startWith(''),
      map(search => (search ? this.list.filter(item => item.code.includes(search)) : this.list))
    );
  }
  ngOnDestroy() {
    this.inputSearch.destroy();
  }

  public hover(item: Template) {
    this.highlighted = item;
    this.hovered.emit(item);
  }
  public select(item: Template) {
    this.highlighted = item;
    this.selected.emit(item);
  }
}
