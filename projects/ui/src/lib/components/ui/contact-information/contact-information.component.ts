import { NgIf } from '@angular/common';
import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { CamIconType } from '@ta/icons';

@Component({
selector: 'ta-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, LocalIconComponent, TranslateModule],
})
export class ContactInformationComponent {
  /**
   * Text to display
   */
  @Input()
  value!: string | null;

  /**
   * Material icon to display
   */
  @Input()
  icon!: string;

  /**
   * Local icon to display
   */
  @Input()
  localIcon!: CamIconType;

  constructor() {}
}
