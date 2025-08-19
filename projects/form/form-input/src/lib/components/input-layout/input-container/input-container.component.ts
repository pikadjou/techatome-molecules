import { Component, Input } from '@angular/core';

import { InputBase } from '@ta/form-model';

@Component({
selector: 'ta-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
  standalone: true,
})
export class InputContainerComponent {
  @Input() input!: InputBase<any>;
}
