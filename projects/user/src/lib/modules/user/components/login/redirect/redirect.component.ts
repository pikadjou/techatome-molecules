import { Component, inject } from '@angular/core';

import { CAM_AUTH_TOKEN } from '../../../services/auth.service';

@Component({
  selector: '',
  template: '',
  standalone: true,
})
export class LoginRedirectComponent {
  private _authService = inject(CAM_AUTH_TOKEN);

  constructor() {
    this._authService.login();
  }
}
