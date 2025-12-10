import { Provider } from "@angular/core";

import { TA_USER_SERVICE, TaUserService } from "./services/user.service";

export const provideUser = (data: {
  service: typeof TaUserService;
}): Provider => [{ provide: TA_USER_SERVICE, useClass: data.service }];
