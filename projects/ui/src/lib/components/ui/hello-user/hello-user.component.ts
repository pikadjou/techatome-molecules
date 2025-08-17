import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { TaSizes } from '@ta/styles';

import { UserLogoNaming } from '../user-logo/user-logo.component';
import { UserLogoComponent } from '../user-logo/user-logo.component';

@Component({
  selector: 'ta-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.scss'],
  standalone: true,
  imports: [NgIf, TranslateModule, UserLogoComponent],
})
export class HelloUserComponent {
  @Input() title?: string;
  @Input() userInfo?: {
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  };
  @Input() bulletSize: TaSizes = 'lg';
  @Input() footer?: string;
}
