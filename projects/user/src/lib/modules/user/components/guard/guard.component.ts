import { NgIf } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { Component, Input, inject } from '@angular/core';

import { CamIconType } from '@ta/icons';
import { CamMainRoute, CamRoutes } from '@ta/menu';
import { CamAbstractComponent } from '@ta/utils';

import { CamPermissionsService, Domain, Level, PermissionFeature } from '../../services/permissions.service';

@Component({
selector: 'ta-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.scss'],,
  standalone: true,
  imports: [NgIf, FontIconComponent],
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
