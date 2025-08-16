import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

@Component({
  selector: 'ta-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.scss'],
})
export class FontIconComponent {
  @Input()
  public name!: string;

  @Input()
  public type: CamSizes | 'xl' | 'big' = 'md';
}
