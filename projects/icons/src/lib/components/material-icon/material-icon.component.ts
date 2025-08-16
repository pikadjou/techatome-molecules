import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

/**
 * @deprecated
 */
@Component({
  selector: 'ta-material-icon',
  templateUrl: './material-icon.component.html',
  styleUrls: ['./material-icon.component.scss'],
})
export class MaterialIconComponent {
  /**
   * If set to true, define an outline style to the icon
   */
  @Input()
  public outline: boolean = false;

  /**
   * If set to true, define a sharp style to the icon
   */
  @Input()
  public sharp: boolean = false;

  /**
   * If set to true, define a rounded style to the icon
   */
  @Input()
  public round: boolean = false;

  /**
   * If set to true, define a dual tone style to the icon
   */
  @Input()
  public dualTone: boolean = false;

  /**
   * If set to true, define a size for the icon
   */
  @Input()
  public type: CamSizes | '' = '';

  public getDisplayStyle(): string {
    if (this.outline) return 'material-icons-outlined';
    if (this.sharp) return 'material-icons-sharp';
    if (this.round) return 'material-icons-round';
    if (this.dualTone) return 'material-icons-two-tone';

    return 'material-icons';
  }

  public getTypeStyle(): string {
    if (!this.type) {
      return '';
    }
    return `icon-${this.type}`;
  }
}
