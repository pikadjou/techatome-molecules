import { Component, Input } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { CamBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [TranslatePipe],
})
export class BannerComponent extends CamBaseComponent {
  @Input()
  message!: string;
}
