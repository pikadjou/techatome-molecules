import { Component, Input } from '@angular/core';

import { InputBase } from '@camelot/form-model';
import { TranslatePipe } from '@camelot/translation';

@Component({
  selector: 'cam-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss'],
  standalone: true,
  imports: [TranslatePipe],
})
export class InputErrorComponent {
  @Input() input!: InputBase<any>;
}
