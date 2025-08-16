import { Component, EventEmitter, Input, Output } from '@angular/core';

import { call, sendMail } from '@ta/utils';

import { UserLogoNaming } from '../user-logo/user-logo.component';
import { IProfileData } from './IProfileData';

@Component({
  selector: 'ta-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})

/**
 * @deprecated
 */
export class ProfileDataComponent {
  @Input()
  profile!: IProfileData;

  @Input()
  userLogo?: {
    userInfo: { profilePictureUrl?: string; naming: UserLogoNaming };
    size?: number;
  };

  @Input()
  sideIcon?: string;

  @Output()
  callAction = new EventEmitter();

  @Output()
  action = new EventEmitter();

  constructor() {}

  public tel() {
    if (this.profile.phoneNumber) {
      call(this.profile.phoneNumber);
      this.callAction.emit();
    }
  }

  public mail() {
    if (this.profile.email) {
      sendMail(this.profile.email);
    }
  }

  public launchAction() {
    this.action.emit();
  }
}
