import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaSizes } from '@ta/styles';

import { TrigramComponent, TrigramTone } from '../trigram/trigram.component';

export interface UserLogoData {
  firstname: string;
  lastname: string;
  picture?: string;
}
@Component({
  selector: 'ta-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.scss'],
  standalone: true,
  imports: [NgStyle, FontIconComponent, TrigramComponent],
})
export class UserLogoComponent {
  user = input.required<UserLogoData>();

  /**
   * Size of user logo desired
   */
  size = input<TaSizes>('lg');

  forcedSize = input<number | undefined>(undefined);

  /** Repli sans photo : `initials` (prénom + nom) ou trigramme. */
  defaultType = input<'font' | 'trigram' | 'initials'>('font');

  /** Forme et teinte du repli textuel. */
  shape = input<'circle' | 'squircle'>('circle');

  tone = input<TrigramTone>('brand');

  get sizeValue() {
    if (this.forcedSize()) {
      return this.forcedSize();
    }
    switch (this.size()) {
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
    return this._trigram(this.user().firstname);
  }

  public getInitials() {
    const { firstname, lastname } = this.user();
    const initials = `${firstname?.[0] ?? ''}${lastname?.[0] ?? ''}`.toUpperCase();
    // Sans nom exploitable : trigramme.
    return initials || this.getTrigram();
  }

  private _trigram = (name: string | null | undefined) => {
    if (!name) return '';
    if (name.length < 4) return name;

    return (name[0] + name[2] + name[3]).toUpperCase();
  };
}
