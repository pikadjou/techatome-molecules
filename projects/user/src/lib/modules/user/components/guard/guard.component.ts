import { AsyncPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaIconType } from '@ta/icons';
import { TaMainRoute, TaRoutes } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { TaAbstractComponent } from '@ta/utils';

import { Level, TaPermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'ta-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, TranslatePipe],
})
export class GuardComponent extends TaAbstractComponent {
  @Input()
  level?: Level;

  @Input()
  feature?: string;

  @Input()
  role?: string;

  @Input()
  canDisplayErrorMessage: boolean = true;

  private readonly _permissionsService = inject(TaPermissionsService);
  get noAccessIcon() {
    return TaIconType.NoAccess;
  }

  constructor() {
    super();
  }

  public isGuardValid$() {
    if (this.role) {
      return this._permissionsService.hasRole$(this.role);
    }

    return this._permissionsService.canAccess$(this.feature ?? '', this.level ?? 'authorize');
  }

  public goToLogin() {
    this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
  }
}
