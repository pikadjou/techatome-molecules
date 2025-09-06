import { Provider } from '@angular/core';
import { AuthConfig } from '@auth0/auth0-angular';
export interface TaAuth0Environment extends AuthConfig {
}
export declare const provideAuth0: (data: {
    config: TaAuth0Environment;
}) => Provider;
