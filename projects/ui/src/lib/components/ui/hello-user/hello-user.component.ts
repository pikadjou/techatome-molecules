import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

import { UserLogoNaming } from '../user-logo/user-logo.component';

@Component({
  selector: 'ta-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss'],
})
export class HelloUserComponent {
  @Input() title?: string;
  @Input() userInfo?: {
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  };
  @Input() bulletSize: CamSizes = 'lg';
  @Input() footer?: string;
}
