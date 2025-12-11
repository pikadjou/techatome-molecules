import { Provider, importProvidersFrom } from '@angular/core';

import { GoogleTagManagerModule } from '@edumetz16/angular-google-tag-manager';

export { GoogleTagManagerService as TaGoogleTagManagerService } from '@edumetz16/angular-google-tag-manager';
export interface IGTMConfig {
  gtmId: string;
  enabled?: boolean;
}

export const provideGTM = (config: IGTMConfig): Provider => [
  importProvidersFrom(
    GoogleTagManagerModule.forRoot({
      id: config.gtmId,
    })
  ),
];
