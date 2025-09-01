import { Component, Input } from '@angular/core';

import { TaSizes } from '@ta/styles';

import { UserLogoData } from '../../user-logo/user-logo.component';
import { UserLogoComponent } from '../../user-logo/user-logo.component';
import { IProfileData } from '../IProfileData';

@Component({
  selector: 'ta-inline-profile-data',
  templateUrl: './inline-profile-data.component.html',
  styleUrls: ['./inline-profile-data.component.scss'],
  standalone: true,
  imports: [UserLogoComponent],
})
export class InlineProfileDataComponent {
  @Input()
  profile!: IProfileData;

  @Input()
  userLogo?: {
    user: UserLogoData;
    size?: TaSizes;
  } | null;
}
