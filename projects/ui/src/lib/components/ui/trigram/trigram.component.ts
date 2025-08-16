import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-trigram',
  templateUrl: './trigram.component.html',
  styleUrls: ['./trigram.component.scss'],
})
export class TrigramComponent {
  /**
   * Text to display in trigram
   */
  @Input()
  value!: string | null;

  /**
   * Size of trigram
   */
  @Input()
  size: number = 35;

  constructor() {}

  public getFontSize() {
    return Math.round(this.size / 3);
  }
}
