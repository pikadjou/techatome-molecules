import { Provider } from '@angular/core';
export { GoogleTagManagerService as TaGoogleTagManagerService } from '@edumetz16/angular-google-tag-manager';
export interface IGTMConfig {
    gtmId: string;
    enabled?: boolean;
}
export declare const provideGTM: (config: IGTMConfig) => Provider;
