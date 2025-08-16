import { Component, OnDestroy, inject } from '@angular/core';

import { of } from 'rxjs';

import { InputDropdown } from '@camelot/form-model';
import { CamTranslationService } from '@camelot/translation';
import { CamBaseComponent } from '@camelot/utils';

import { CAM_AUTH_TOKEN } from '../../services/auth.service';
import { CamPermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'cam-user-menu',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
})
export class MenuUserComponent extends CamBaseComponent implements OnDestroy {
  public readonly _permissionsService = inject(CamPermissionsService);

  get roles() {
    return this._permissionsService.roles;
  }

  get getFirstLetter() {
    return this.authService.firstLetter;
  }

  public authService = inject(CAM_AUTH_TOKEN);
  public language = new InputDropdown<string>({
    label: '',
    options: of([
      { id: 'fr', name: 'Français' },
      { id: 'nl', name: 'Nederlands' },
      { id: 'en', name: 'English' },
      { id: 'es', name: 'Español' },
    ]),
  });

  constructor(public translateService: CamTranslationService) {
    super();

    this.language.value = this.translateService.getLanguage();
    this.language.createFormControl();

    this._registerSubscription(this.language.changeValue$.subscribe(value => this.translateService.use(value)));
  }

  override ngOnDestroy() {
    super.ngOnDestroy();
    this.language.destroy();
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
