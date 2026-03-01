import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import { TaMainRoute, TaRoutes } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { TaTranslationUser } from '../../../../translation.service';
import { Level, TaPermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'ta-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, TranslatePipe],
})
export class GuardComponent extends TaAbstractComponent {
  level = input<Level>();

  feature = input<string>();

  role = input<string>();

  canDisplayErrorMessage = input<boolean>(true);

  /** Affiche le contenu avec un overlay de connexion au lieu de le masquer */
  preview = input<boolean>(false);

  private readonly _permissionsService = inject(TaPermissionsService);
  get noAccessIcon() {
    return TaIconType.NoAccess;
  }

  constructor() {
    super();
    TaTranslationUser.getInstance();
  }

  public isGuardValid$() {
    if (this.role()) {
      return this._permissionsService.hasRole$(this.role()!);
    }

    return this._permissionsService.canAccess$(this.feature() ?? '', this.level() ?? 'authorize');
  }

  public goToLogin() {
    this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
  }

  public goToRegister() {
    this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.SINGIN]));
  }
}
