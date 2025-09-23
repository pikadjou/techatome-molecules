import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, Input, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

@Component({
  selector: 'ta-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  standalone: true,
  imports: [NgClass, NgTemplateOutlet, FontIconComponent],
})
export class TitleComponent {
  /**
   * Title level
   * Higher value means lower title size
   */
  @Input()
  level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  /**
   * Title theme
   * If set to true, title will be themed with CSS
   */
  @Input() isTheme: boolean = false;

  @Input() isBold: boolean = false;

  icon = input<string>();

  constructor() {}
}
