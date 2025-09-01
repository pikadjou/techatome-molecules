import { Injectable } from '@angular/core';

import { filter } from 'rxjs';

import { GraphEndpoint, HandleSimpleRequest } from '@ta/server';
import { CamBaseService } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { UserProfile } from './dto/user-profile';
import { userInfo } from './queries';

const graphEndpoint: GraphEndpoint = {
  clientName: 'userService',
  endpoint: '',
};

@Injectable({
  providedIn: 'root',
})
export class TaUserService extends CamBaseService {
  public userProfile = new HandleSimpleRequest<UserProfile>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchUserProfile$() {
    return this.userProfile.fetch(
      this._graphService
        .fetchQuery<UserProfile>(userInfo(), 'userInfo', graphEndpoint.clientName)
        .pipe(filter(isNonNullable))
    );
  }
}
