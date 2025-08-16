import { Component, Input } from '@angular/core';

import { octetsToMo, roundToDecimal } from '@ta/utils';

@Component({
  selector: 'ta-megaoctet',
  templateUrl: './megaoctet.component.html',
  styleUrls: ['./megaoctet.component.scss'],
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
