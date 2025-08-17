import { Component, inject } from '@angular/core';

import { CAM_AUTH_TOKEN } from '../../services/auth.service';

@Component({
selector: 'ta-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],,
  standalone: true,
})
export class LoginCardComponent {
  private _authService = inject(CAM_AUTH_TOKEN);

  constructor() {}

  public login() {
    this._authService.login();
  }
}
