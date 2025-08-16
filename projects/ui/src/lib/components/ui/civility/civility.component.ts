import { Component, Input } from '@angular/core';

import { Civility } from '@camelot/utils';

@Component({
  selector: 'cam-civility',
  templateUrl: './civility.component.html',
  styleUrls: ['./civility.component.scss'],
})
export class CivilityComponent {
  /**
   * Define the civility to display
   */
  @Input()
  civility!: Civility | null;

  constructor() {}

  public getIcon(): string {
    switch (this.civility) {
      case Civility.Unknown:
        return '';
      case Civility.Dear:
        return 'wc';
      case Civility.Madame:
        return 'woman';
      case Civility.Sir:
        return 'man';
      default:
        return '';
    }
  }
}
