import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ta-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage ]
})
export class LogoComponent {

  /**
   * If set, logo oneline version will be taken
   */
  @Input()
  type?: 'name' | 'full';


  constructor() {}

  public getImagePath(): string {
    return `assets/logo/logo${this.type ? `-${this.type}` : ''}.png`;
  }
}
