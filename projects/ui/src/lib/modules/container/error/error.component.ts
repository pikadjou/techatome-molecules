import { Component, Input } from '@angular/core';

@Component({
  selector: 'cam-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input()
  message = '';

  @Input()
  code = 200;

  constructor() {}
}
