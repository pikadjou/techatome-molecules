import { NgFor, AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { UserLogoData } from '../user-logo/user-logo.component';
import { UserLogoComponent } from '../user-logo/user-logo.component';

@Component({
selector: 'ta-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [NgFor, AsyncPipe, UserLogoComponent],
})
export class UsersListComponent {
  @Input()
  users!: Observable<UserLogoData[]>;
}
