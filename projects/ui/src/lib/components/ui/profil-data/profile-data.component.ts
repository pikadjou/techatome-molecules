import { NgIf, NgClass } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { call, sendMail } from '@ta/utils';

import { CamTranslationUI } from '../translation.service';

import { UserLogoNaming } from '../user-logo/user-logo.component';
import { IProfileData } from './IProfileData';
import { UserLogoComponent } from '../user-logo/user-logo.component';
import { ButtonComponent } from '../button/button.component';

@Component({
selector: 'ta-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent, TranslateModule, UserLogoComponent, ButtonComponent],
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

  constructor() {
    CamTranslationUI.getInstance();
  }

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
