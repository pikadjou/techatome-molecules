import { Component, Input } from '@angular/core';

@Component({
selector: 'ta-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  standalone: true,
})
export class CardImageComponent {
  @Input()
  src: string = '';

  constructor() {}
}
