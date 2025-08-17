import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { InputBase } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
selector: 'ta-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],,
  standalone: true,
})
export class InputsComponent extends TaBaseComponent {
  @Input()
  input!: InputBase<any>;

  @Input()
  standalone = false;

  @Input()
  onFocus!: Observable<void>;

  @Input()
  space = true;

  matcher = new MyErrorStateMatcher();
}
