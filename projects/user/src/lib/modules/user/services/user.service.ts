import { Injectable, InjectionToken } from '@angular/core';

import { filter } from 'rxjs';

import { GraphEndpoint, HandleSimpleRequest } from '@ta/server';
import { TaBaseService } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { UserProfile, userProfileProps } from './dto/user-profile';
import { userInfo } from './queries';

export const TA_USER_SERVICE = new InjectionToken<TaUserService>('TaUserService_injection-token');

const graphEndpoint: GraphEndpoint = {
  clientName: 'userService',
  endpoint: '',
};

@Injectable({
  providedIn: 'root',
})
export class TaUserService extends TaBaseService {
  public userProfile = new HandleSimpleRequest<UserProfile>();
  public userDetail = new HandleSimpleRequest<UserProfile>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchUserProfile$(props: string = '') {
    return this.userProfile.fetch(
      this._graphService
        .fetchQuery<UserProfile>(
          userInfo({
            props: `
              ${userProfileProps.get('id')}
              ${userProfileProps.get('firstname')}
              ${userProfileProps.get('lastname')}
              ${userProfileProps.get('email')}
              ${userProfileProps.get('picture')}
              ${props}
            `,
          }),
          'userInfo',
          graphEndpoint.clientName
        )
        .pipe(filter(isNonNullable))
    );
  }
}
