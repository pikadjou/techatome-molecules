import { AsyncPipe, NgIf } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { EmptyComponent, ErrorComponent, LoaderComponent, UserLogoComponent } from '@ta/ui';
import { TaBaseComponent } from '@ta/utils';

import { TaUsersService } from '../../services/users.service';
import { User } from '../../services/users/dto/user';

@Component({
  selector: 'ta-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe, FontIconComponent, LoaderComponent, ErrorComponent, EmptyComponent, UserLogoComponent],
})
export class ContactCardComponent extends TaBaseComponent {
  @Input()
  userId: string = '';

  get user$() {
    return this._usersService.user.get$(this.userId);
  }

  constructor(private _usersService: TaUsersService) {
    super();
  }

  ngOnInit() {
    this._fetch();
  }

  public getUserLogoData(user: User) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      trigram: user.trigram,
      picture: user.picture,
    };
  }

  private _fetch() {
    this.requestState.asked();
    this._usersService.fetchUser$(this.userId).subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }
}
