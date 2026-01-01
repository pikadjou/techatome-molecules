import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaSizes } from '@ta/styles';

import { TrigramComponent } from '../trigram/trigram.component';

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

  defaultType = input<'font' | 'trigram'>('font');

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

  private _trigram = (name: string | null | undefined) => {
    if (!name) return '';
    if (name.length < 4) return name;

    return (name[0] + name[2] + name[3]).toUpperCase();
  };
}
