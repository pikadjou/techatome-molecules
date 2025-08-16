import { Component, Input } from '@angular/core';

import { UserLogoNaming } from '../public-api';

@Component({
  selector: 'ta-ui-profile-display',
  templateUrl: './ui-profile-display.component.html',
  styleUrls: ['./ui-profile-display.component.scss'],
})
export class UiProfileDisplayComponent {
  @Input()
  label!: string;

  @Input()
  userLogo?: {
    userInfo: { profilePictureUrl?: string; naming: UserLogoNaming };
    size?: number;
  };

  @Input()
  ctas?:
    | {
        icon?: string;
        label?: string;
        callback: () => void;
      }[]
    | null;

  @Input()
  sideIcon?: {
    icon: string;
    callback: () => void;
  };
}
