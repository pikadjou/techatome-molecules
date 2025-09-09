import { Component, inject } from '@angular/core';

import { TA_AUTH_TOKEN } from '../../../services/auth.service';

@Component({
  selector: '',
  template: '',
  standalone: true,
})
export class SignRedirectComponent {
  private _authService = inject(TA_AUTH_TOKEN);

  constructor() {
    this._authService.signin();
  }
}
