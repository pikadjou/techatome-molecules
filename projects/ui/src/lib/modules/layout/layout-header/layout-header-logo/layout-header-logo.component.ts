import { Component, Input, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CamBaseComponent } from '@ta/utils';
import { Observable } from 'rxjs';

import { UserLogoNaming } from '../../../../components/ui/user-logo/user-logo.component';
import {
  TemplateModalContainer,
  TemplateModalContainerData,
} from '../../layout-modal/layout-modal-container/layout-modal-container.component';

@Component({
  selector: 'ta-layout-header-logo',
  templateUrl: './layout-header-logo.component.html',
  styleUrls: ['./layout-header-logo.component.scss'],
})
export class LayoutHeaderLogoComponent extends CamBaseComponent {
  @Input()
  profile: {
    template: TemplateRef<any>;
    user: { profilePictureUrl?: string; naming: UserLogoNaming | null };
  } | null = null;

  @Input()
  notificationTemplate: TemplateRef<any> | null = null;

  @Input()
  askClosing$: Observable<null> | undefined;

  constructor(private _modal: MatDialog) {
    super();
  }

  public userInfo(): {
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  } {
    if (!this.profile) {
      return {
        naming: null,
        profilePictureUrl: '',
      };
    }
    return {
      naming: this.profile.user.naming,
      profilePictureUrl: this.profile.user.profilePictureUrl,
    };
  }

  public goToHome() {
    this._router.navigateByUrl('/');
  }
  public openProfile() {
    if (!this.profile?.template) {
      return;
    }
    this._modal.open<TemplateModalContainer, TemplateModalContainerData>(TemplateModalContainer, {
      data: {
        template: this.profile?.template,
        askClosing$: this.askClosing$,
      },
    });
  }

  public openNotification() {
    if (!this.notificationTemplate) {
      return;
    }
    this._modal.open<TemplateModalContainer, TemplateModalContainerData>(TemplateModalContainer, {
      data: {
        template: this.notificationTemplate,
        askClosing$: this.askClosing$,
      },
    });
  }
}
