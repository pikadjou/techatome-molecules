import { Injectable } from '@angular/core';

import { BehaviorSubject, filter, tap } from 'rxjs';

import { Request } from '@camelot/server';
import { CamBaseService, MappingApiType } from '@camelot/server';

import { UserProfile } from './dto/user-profile';

const apiRoutes: MappingApiType = {
  GetUserProfile: {
    type: 'GET',
    url: '{ApiUrl}/UserProfile',
  },
};

@Injectable({
  providedIn: 'root',
})
export class CamUserService extends CamBaseService {
  public userProfile$ = new BehaviorSubject<UserProfile | null>(null);

  constructor() {
    super(apiRoutes);
  }

  public fetchUserProfile() {
    return this._serverService
      .request<UserProfile>(
        new Request({ type: 'GetUserProfile', cacheTime: -1 })
      )
      .pipe(
        filter((data) => !!data),
        tap((data) => {
          this.userProfile$.next(data);
        })
        // GOOGLE TAG MANAGER NOT USED YET
        // tap(data => {
        //   this._gtmService.pushTag({
        //     event: 'userProfile',
        //     userProfile: {
        //       id: data.id,
        //       lastName: data.lastName,
        //       firstName: data.firstName,
        //     },
        //   });
        // })
      );
  }
}
