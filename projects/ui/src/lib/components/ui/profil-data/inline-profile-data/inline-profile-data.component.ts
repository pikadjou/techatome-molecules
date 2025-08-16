import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

import { UserLogoNaming } from '../../user-logo/user-logo.component';
import { IProfileData } from '../IProfileData';

@Component({
  selector: 'ta-inline-profile-data',
  templateUrl: './inline-profile-data.component.html',
  styleUrls: ['./inline-profile-data.component.scss'],
})
export class InlineProfileDataComponent {
  @Input()
  profile!: IProfileData;

  @Input()
  userLogo?: {
    userInfo: { profilePictureUrl?: string; naming: UserLogoNaming };
    size?: CamSizes;
  } | null;
}
