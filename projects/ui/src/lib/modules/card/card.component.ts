import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { NewComponent } from '../../components/ui/new/new.component';

@Component({
  selector: 'ta-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [NgClass, NewComponent],
  host: {
    '[class.full-height]': 'this.fullHeight()',
  },
})
export class CardComponent {
  highlight = input<boolean>(false);

  shadow = input<boolean>(true);

  fullHeight = input<boolean>(false);

  noContent = input<boolean>(false);

  directionCard = input<'vertical' | 'horizontal' | null>(null);

  isNew = input<boolean>(false);

  click = output<any>();

  public hasHandler: boolean = false;

  ngOnInit() {
    // With output() signal API, subscriber detection is not available.
    // The hover class is applied when hasHandler is true.
    // Parent components binding (click) will trigger the output.
    this.hasHandler = (this.click as any)['listeners']?.length > 0 || false;
  }
  constructor() {}

  public clickTrigger() {
    this.click.emit(null);
  }
}
