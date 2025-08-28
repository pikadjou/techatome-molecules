import { NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { CamIconType } from '@ta/icons';
import { TaMainRoute, TaRoutes } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent } from '@ta/ui';
import { CamAbstractComponent } from '@ta/utils';

import { CamPermissionsService, Domain, Level, PermissionFeature } from '../../services/permissions.service';

@Component({
  selector: 'ta-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss'],
  standalone: true,
  imports: [NgIf, FontIconComponent, ButtonComponent, TranslatePipe],
})
export class GuardComponent extends CamAbstractComponent {
  @Input()
  level!: Level | string;

  @Input()
  feature!: PermissionFeature | Domain | string;

  @Input()
  canDisplayErrorMessage: boolean = true;

  private readonly _permissionsService = inject(CamPermissionsService);
  get noAccessIcon() {
    return CamIconType.NoAccess;
  }

  constructor() {
    super();
  }

  public isGuardValid(): boolean {
    return this._permissionsService.canDirectAccess(this.feature, this.level);
  }

  public goToLogin() {
    this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
  }
}
