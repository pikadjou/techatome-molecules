import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cam-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
})
export class ListElementComponent {
  @Input()
  withSeparator: boolean = true;

  @Input()
  flexColumn: boolean = false;

  @Output()
  action = new EventEmitter();
}
