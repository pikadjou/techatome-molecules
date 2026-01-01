import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

import { NewComponent } from '../../components/ui/new/new.component';

@Component({
  selector: 'ta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgClass, NewComponent],
})
export class CardComponent {
  highlight = input<boolean>(false);

  shadow = input<boolean>(true);

  fullHeight = input<boolean>(false);

  noContent = input<boolean>(false);

  directionCard = input<'vertical' | 'horizontal' | null>(null);

  isNew = input<boolean>(false);

  @Output()
  click: EventEmitter<any> = new EventEmitter<any>();

  public hasHandler: boolean = false;

  ngOnInit() {
    this.hasHandler = this.click.observers.length > 0;
  }
  constructor() {}

  public clickTrigger() {
    this.click.emit(null);
  }
}
