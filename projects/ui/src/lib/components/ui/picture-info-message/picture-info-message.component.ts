import { NgIf } from '@angular/common';
import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { getFontIcon, isFontIcon, isLocalIcon } from '@ta/icons';
import { CamIconType } from '@ta/icons';
import { TaSizes } from '../../../types/sizes';
import { MessageLevel } from '@ta/utils';
import { TypedMessageComponent } from '../typed-message/typed-message.component';

@Component({
selector: 'ta-picture-info-message',
  templateUrl: './picture-info-message.component.html',
  styleUrls: ['./picture-info-message.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, LocalIconComponent, TranslateModule, TypedMessageComponent],
})
export class PictureInfoMessageComponent {
  @Input() icon?: CamIconType | string;
  @Input() iconSize?: TaSizes | 'xl';
  @Input() text?: string;
  @Input() type?: MessageLevel = 'info';

  get displayedText() {
    return this.text ?? '';
  }

  public isFontIcon(icon: CamIconType | string): boolean {
    return isFontIcon(icon);
  }

  public getFontIcon(icon: CamIconType | string): string {
    return getFontIcon(icon);
  }

  public isLocalIcon(icon: CamIconType | string): boolean {
    return isLocalIcon(icon);
  }
}
