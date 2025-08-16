import { Component, Input } from '@angular/core';

import { CamIconType } from '@camelot/icons';

@Component({
  selector: 'cam-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
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
