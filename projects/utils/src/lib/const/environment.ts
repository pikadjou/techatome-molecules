import { InjectionToken } from "@angular/core";

import { Culture } from "../types/culture";

export const LOCAL = "config_local";
export const APPLICATION_CONFIG = new InjectionToken<IApplicationConfig>(
  "config_application"
);
export const DEFAULT_USER_LANGUAGE = new InjectionToken<IDefaultUserLanguage>(
  "default_user_language"
);

export interface ILocalConfig {
  isLocal: boolean;
}

export interface IApplicationConfig {
  isCustomerApplication: boolean;
}

export type IDefaultUserLanguage = Culture;
