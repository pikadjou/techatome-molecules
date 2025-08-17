import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaSizes } from '@ta/styles';

import { TrigramComponent } from '../trigram/trigram.component';

export interface UserLogoNaming {
  name: string;
  firstName: string | null;
  trigram: string;
}

export interface UserLogoData {
  firstName: string;
  lastName: string;
  trigram?: string;
  picture?: string;
}
@Component({
  selector: 'ta-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.scss'],
  standalone: true,
  imports: [NgIf, NgStyle, FontIconComponent, TrigramComponent],
})
export class UserLogoComponent {
  /**
   * @deprecated
   * User information containing his profile picture and his naming
   */
  @Input()
  userInfo?: { profilePictureUrl?: string; naming: UserLogoNaming | null };

  /**
   * User information containing his profile picture and his naming
   */
  @Input()
  user?: UserLogoData;

  /**
   * Size of user logo desired
   */
  @Input()
  size?: TaSizes = 'lg';

  @Input()
  forcedSize?: number;

  @Input()
  defaultType: 'font' | 'trigram' = 'font';

  get sizeValue() {
    if (this.forcedSize) {
      return this.forcedSize;
    }
    switch (this.size) {
      case 'sm':
        return 16;
      case 'md':
        return 24;
      case 'lg':
        return 48;
      case 'xl':
        return 70;
      default:
        return 48;
    }
  }

  public getTrigram() {
    const trigram = this.user?.trigram || this.userInfo?.naming?.trigram;
    if (trigram) {
      return trigram;
    }

    return this._trigram(this.user?.firstName || this.userInfo?.naming?.trigram);
  }

  private _trigram = (name: string | null | undefined) => {
    if (!name) return '';
    if (name.length < 4) return name;

    return (name[0] + name[2] + name[3]).toUpperCase();
  };
}
