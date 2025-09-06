import { Component, inject } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, CardComponent, CardContentComponent } from '@ta/ui';

import { TA_AUTH_TOKEN } from '../../services/auth.service';

@Component({
  selector: 'ta-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
  standalone: true,
  imports: [CardComponent, CardContentComponent, ButtonComponent, TranslatePipe],
})
export class LoginCardComponent {
  private _authService = inject(TA_AUTH_TOKEN);

  constructor() {}

  public login() {
    this._authService.login();
  }
}
