import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';

import { of } from 'rxjs';

import { DropdownComponent } from '@ta/form-input';
import { InputDropdown } from '@ta/form-model';
import { CamTranslationService, TranslatePipe } from '@ta/translation';
import { ButtonComponent, TrigramComponent } from '@ta/ui';
import { JoinPipe, StopPropagationDirective } from '@ta/utils';
import { TaBaseComponent } from '@ta/utils';

import { CAM_AUTH_TOKEN } from '../../services/auth.service';
import { TaPermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'ta-user-menu',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    StopPropagationDirective,
    TrigramComponent,
    ButtonComponent,
    TranslatePipe,
    JoinPipe,
    DropdownComponent,
  ],
})
export class MenuUserComponent extends TaBaseComponent implements OnDestroy {
  public readonly _permissionsService = inject(TaPermissionsService);

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

    this._registerSubscription(this.language.changeValue$.subscribe(value => this.translateService.use(value)));
  }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }
}
