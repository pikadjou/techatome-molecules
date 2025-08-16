import { Injectable } from '@angular/core';

import { User } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CamConfigurationService {
  public organizationName$ = new BehaviorSubject<string>('');

  constructor() {}

  public set(user: User) {
    this.organizationName$.next(user['merlinsoftware/orgname']);
  }
}
