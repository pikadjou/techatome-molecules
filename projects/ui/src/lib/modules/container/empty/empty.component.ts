import { Component, Input } from '@angular/core';

import { CamIconType } from '@camelot/icons';
import { CamSizes } from '@camelot/styles';
import { MessageLevel } from '@camelot/utils';

@Component({
  selector: 'cam-empty',
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
