import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
selector: 'ta-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss'],
  standalone: true,
})
export class ListElementComponent {
  @Input()
  withSeparator: boolean = true;

  @Input()
  flexColumn: boolean = false;

  @Output()
  action = new EventEmitter();
}
