import { NgIf } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { octetsToMo, roundToDecimal } from '@ta/utils';

@Component({
selector: 'ta-megaoctet',
  templateUrl: './megaoctet.component.html',
  styleUrls: ['./megaoctet.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, TranslateModule],
})
export class MegaoctetComponent {
  @Input()
  octet!: number;

  @Input()
  icon: boolean = false;

  get megaoctet() {
    return roundToDecimal(octetsToMo(this.octet), 2);
  }
}
