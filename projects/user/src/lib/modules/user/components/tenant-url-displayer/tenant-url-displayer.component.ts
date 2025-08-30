import { AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { ButtonComponent, ErrorComponent, LoaderComponent } from '@ta/ui';
import { TaBaseComponent, openExternalUrl } from '@ta/utils';

import { TaUsersService } from '../../services/users.service';

@Component({
  selector: 'ta-tenant-url-displayer',
  templateUrl: './tenant-url-displayer.component.html',
  styleUrls: ['./tenant-url-displayer.component.scss'],
  standalone: true,
  imports: [AsyncPipe, FontIconComponent, ButtonComponent, LoaderComponent, ErrorComponent],
})
export class TenantUrlDisplayerComponent extends TaBaseComponent {
  @Input()
  contactId!: string;

  @Input()
  display: 'button' | 'icon' = 'icon';

  get contactTenantRoute$() {
    return this._usersService.contactTenantRoute.get$();
  }

  private _usersService = inject(TaUsersService);

  constructor() {
    super();
  }

  ngOnInit() {
    this._fetch();
  }

  public navigateToTenantContact(url: string) {
    openExternalUrl(url);
  }

  private _fetch() {
    this.requestState.asked();
    this._usersService.fetchContactTenantRoute$(this.contactId).subscribe({
      next: () => {
        this.requestState.completed();
      },
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
