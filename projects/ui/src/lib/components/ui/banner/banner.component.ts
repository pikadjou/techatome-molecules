import { Component, Input } from '@angular/core';

import { TranslatePipe } from '@camelot/translation';
import { CamBaseComponent } from '@camelot/utils';

@Component({
  selector: 'cam-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [TranslatePipe],
})
export class BannerComponent extends CamBaseComponent {
  @Input()
  message!: string;
}
