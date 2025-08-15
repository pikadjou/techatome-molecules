import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { map, switchMap } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { InputDropdown } from '@ta/form-model';
import { TaBaseComponent, toArray, TranslatePipe } from '@ta/utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormLabelComponent } from '../../label/label.component';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ta-input-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, TranslatePipe, FormLabelComponent],
})
export class DropdownComponent extends TaBaseComponent implements OnInit {
  @Input()
  input!: InputDropdown<any>;

  @Input()
  matcher!: ErrorStateMatcher;

  @Input()
  space = true;

  @Output()
  valueChanged = new EventEmitter();

  public validators = Validators;
  public filteredOptions$: Observable<{ id: string; name: string; disabled?: boolean }[]> | null = null;

  constructor() {
    super();
  }

  ngOnInit() {
    if (this.matcher === null) {
      this.matcher = new ErrorStateMatcher();
    }
    if (this.input.formControl) {
      this.filteredOptions$ = this.input.formControl.valueChanges.pipe(switchMap(x => this._filter(x)));
    }
  }

  public onChange(value: any) {
    this.valueChanged.emit(value);
  }

  private _filter(value: string | string[]): Observable<{ id: string; name: string; disabled?: boolean }[]> {
    return this.input.options.pipe(
      map(x => x.filter(option => option.name?.toLowerCase()?.includes(toArray(value).join(' ')?.toLowerCase())))
    );
  }
}
