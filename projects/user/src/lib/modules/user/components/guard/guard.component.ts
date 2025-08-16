import { Component, Input, inject } from '@angular/core';

import { CamIconType } from '@camelot/icons';
import { CamMainRoute, CamRoutes } from '@camelot/menu';
import { CamAbstractComponent } from '@camelot/utils';

import { CamPermissionsService, Domain, Level, PermissionFeature } from '../../services/permissions.service';

@Component({
  selector: 'cam-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss'],
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
    this._router.navigateByUrl(CamRoutes.getUrl([CamMainRoute.USERLOGIN]));
  }
}
