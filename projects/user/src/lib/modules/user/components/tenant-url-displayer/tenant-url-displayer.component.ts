import { NgIf, AsyncPipe } from '@angular/common';
import { FontIconComponent } from '@ta/icons';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';

import { TaBaseComponent, openExternalUrl } from '@ta/utils';

import { CamUsersService } from '../../services/users.service';

@Component({
selector: 'ta-tenant-url-displayer',
  templateUrl: './tenant-url-displayer.component.html',
  styleUrls: ['./tenant-url-displayer.component.scss'],,
  standalone: true,
  imports: [NgIf, AsyncPipe, FontIconComponent],
})
export class TenantUrlDisplayerComponent extends TaBaseComponent {
  @Input()
  contactId!: string;

  @Input()
  display: 'button' | 'icon' = 'icon';

  get contactTenantRoute$() {
    return this._usersService.contactTenantRoute.get$();
  }

  private _usersService = inject(CamUsersService);

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
