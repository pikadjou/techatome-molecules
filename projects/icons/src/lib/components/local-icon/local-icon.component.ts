import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TaSizes } from '@ta/styles';

import { TaIconType, TaIconsService } from '../../services/icons.service';

/**
 * @deprecated
 */
@Component({
  selector: 'ta-local-icon',
  templateUrl: './local-icon.component.html',
  styleUrls: ['./local-icon.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class LocalIconComponent {
  /**
   * Icon to display
   */
  @Input()
  public type!: TaIconType | string | null;

  /**
   * Size of the icon
   */
  @Input()
  public size: TaSizes | 'xl' = 'xs';

  /**
   * If set to true, icon will have a rotation animation
   */
  @Input()
  public rotation = false;

  constructor(
    private _iconService: TaIconsService,
    private _sanitizer: DomSanitizer
  ) {}

  public getSvgIcon() {
    return this._sanitizer.bypassSecurityTrustHtml(this._iconService.getIcon(this.type as TaIconType));
  }
  public getSize(): string {
    if (this.size === 'xs') {
      return '28px';
    }
    if (this.size === 'sm') {
      return '35px';
    }
    if (this.size === 'md') {
      return '50px';
    }
    if (this.size === 'lg') {
      return '120px';
    }
    if (this.size === 'xl') {
      return '120px';
    }

    return 'auto';
  }
}
