import { Component, Input } from '@angular/core';

import { TaSizes } from '@ta/styles';
import { MessageLevel } from '@ta/utils';
import { PictureInfoMessageComponent } from '../../../components/picture-info-message/picture-info-message.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ta-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
  standalone: true,
  imports: [PictureInfoMessageComponent, NgIf]
})
export class EmptyComponent {
  @Input() isEmpty: boolean = true;
  @Input() isLight: boolean = true;
  @Input() showMessage: boolean = true;

  @Input() text?: string = 'container.empty.light-message';
  @Input() type?: MessageLevel = 'info';

  @Input() icon?: string = 'ghost';
  @Input() iconSize?: TaSizes | 'xl';
}
