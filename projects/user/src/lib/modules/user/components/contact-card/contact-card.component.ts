import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { CamBaseComponent } from '@ta/utils';

import { CamUsersService } from '../../services/users.service';
import { User } from '../../services/users/dto/user';

@Component({
  selector: 'ta-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent extends CamBaseComponent {
  @Input()
  userId: string = '';

  get user$() {
    return this._usersService.user.get$(this.userId);
  }

  constructor(private _usersService: CamUsersService) {
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
