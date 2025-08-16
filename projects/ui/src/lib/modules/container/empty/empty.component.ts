import { Component, Input } from '@angular/core';

import { CamIconType } from '@ta/icons';
import { CamSizes } from '@ta/styles';
import { MessageLevel } from '@ta/utils';

@Component({
  selector: 'ta-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss'],
})
export class EmptyComponent {
  @Input() isEmpty: boolean = true;
  @Input() isLight: boolean = true;
  @Input() showMessage: boolean = true;

  @Input() text?: string = 'container.empty.light-message';
  @Input() type?: MessageLevel = 'info';

  @Input() icon?: CamIconType | string = 'ghost';
  @Input() iconSize?: CamSizes | 'xl' = 'lg';
}
