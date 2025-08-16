import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  /**
   * If set, logo white or black version will be taken
   */
  @Input()
  color?: 'white' | 'black';

  /**
   * If set, logo oneline version will be taken
   */
  @Input()
  type?: 'oneline';

  /**
   * Set the logo width in %
   */
  @Input()
  widthPercentage?: number = 100;

  get imageWidth(): string {
    return this.widthPercentage + '%';
  }

  constructor() {}

  public getImagePath(): string {
    return `assets/partners/logo/logo${this.type ? `-${this.type}` : ''}${this.color ? `-${this.color}` : ''}.png`;
  }
}
