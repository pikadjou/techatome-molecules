import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TaBaseComponent, fullName, sendMail } from '@ta/utils';

import { CamUsersService } from '../../services/users.service';
import { User } from '../../services/users/dto/user';

@Component({
selector: 'ta-user-my-profile',
  templateUrl: './user-my-profile.component.html',
  styleUrls: ['./user-my-profile.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
})
export class UserMyProfileComponent extends TaBaseComponent {
  @Input()
  canModify: boolean = true;

  @Output()
  modifyAction = new EventEmitter();

  public readonly mailTo = sendMail;

  public ctas = [
    {
      icon: 'modify',
      label: 'user.modify',
      callback: () => this._modifyProfile(),
    },
  ];
  get currentUser$() {
    return this._userService.currentUser.get$();
  }
  constructor(private _userService: CamUsersService) {
    super();
    this._fetch();
  }

  public getFullName(firstName: string, lastName: string) {
    return fullName({ firstName: firstName, name: lastName });
  }

  public getUserLogo(user: User) {
    return {
      userInfo: {
        profilePictureUrl: user.picture,
        naming: {
          name: user.lastName,
          firstName: user.firstName,
          trigram: user.trigram,
        },
      },
    };
  }

  private _fetch() {
    this.requestState.asked();
    this._userService.fetchCurrentUser$().subscribe({
      complete: () => this.requestState.completed(),
      error: (error: HttpErrorResponse) => {
        this.requestState.onError(error.status, error.statusText);
      },
    });
  }

  private _modifyProfile() {
    this.modifyAction.emit();
  }
}
