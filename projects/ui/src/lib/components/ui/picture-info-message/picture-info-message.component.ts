import { Component, Input } from '@angular/core';

import { getFontIcon, isFontIcon, isLocalIcon } from '@ta/icons';
import { CamIconType } from '@ta/icons';
import { CamSizes } from '@ta/styles';
import { MessageLevel } from '@ta/utils';

@Component({
  selector: 'ta-picture-info-message',
  templateUrl: './picture-info-message.component.html',
  styleUrls: ['./picture-info-message.component.scss'],
})
export class PictureInfoMessageComponent {
  @Input() icon?: CamIconType | string;
  @Input() iconSize?: CamSizes | 'xl';
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
