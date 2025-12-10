import { Injectable, InjectionToken } from "@angular/core";

import { filter } from "rxjs";

import { GraphEndpoint, HandleSimpleRequest } from "@ta/server";
import { TaBaseService } from "@ta/server";
import { isNonNullable } from "@ta/utils";

import { UserProfile, userProfileProps } from "./dto/user-profile";
import { userInfo } from "./queries";

export const TA_USER_SERVICE = new InjectionToken<TaUserService>(
  "TaUserService_injection-token"
);

const graphEndpoint: GraphEndpoint = {
  clientName: "userService",
  endpoint: "",
};

@Injectable({
  providedIn: "root",
})
export class TaUserService<T = UserProfile> extends TaBaseService {
  public userProfile = new HandleSimpleRequest<T>();

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: graphEndpoint });
  }

  public fetchUserProfile$(props: string = "") {
    return this.userProfile.fetch(
      this._graphService
        .fetchQuery<T>(
          userInfo({
            props: `
              ${userProfileProps.get("id")}
              ${userProfileProps.get("firstname")}
              ${userProfileProps.get("lastname")}
              ${userProfileProps.get("email")}
              ${userProfileProps.get("picture")}
              ${userProfileProps.get("dateOfBirth")}
              ${props}
            `,
          }),
          "userInfo",
          graphEndpoint.clientName
        )
        .pipe(filter(isNonNullable))
    );
  }
}
