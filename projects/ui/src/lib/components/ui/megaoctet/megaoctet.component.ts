import { Component, Input } from '@angular/core';

import { octetsToMo, roundToDecimal } from '@camelot/utils';

@Component({
  selector: 'cam-megaoctet',
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
