import { Component, Input } from '@angular/core';
import { InputBase } from '@camelot/form-model';

@Component({
  selector: 'cam-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent {
  @Input() input!: InputBase<any>;
}
