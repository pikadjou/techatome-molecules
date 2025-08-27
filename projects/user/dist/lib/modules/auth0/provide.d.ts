import { Provider } from '@angular/core';
import { AuthConfig } from '@auth0/auth0-angular';
export interface CamAuth0Environment extends AuthConfig {
}
export declare const provideAuth0: (data: {
    config: CamAuth0Environment;
}) => Provider;
