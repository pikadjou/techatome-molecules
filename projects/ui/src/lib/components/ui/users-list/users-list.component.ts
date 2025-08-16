import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { UserLogoData } from '../user-logo/user-logo.component';

@Component({
  selector: 'ta-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Input()
  users!: Observable<UserLogoData[]>;
}
