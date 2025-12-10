import { InjectionToken } from "@angular/core";
import { Culture } from "../types/culture";
export declare const LOCAL = "config_local";
export declare const APPLICATION_CONFIG: InjectionToken<IApplicationConfig>;
export declare const DEFAULT_USER_LANGUAGE: InjectionToken<Culture>;
export interface ILocalConfig {
    isLocal: boolean;
}
export interface IApplicationConfig {
    isCustomerApplication: boolean;
}
export type IDefaultUserLanguage = Culture;
