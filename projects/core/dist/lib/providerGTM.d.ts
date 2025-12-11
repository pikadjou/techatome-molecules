import { Provider } from '@angular/core';
export interface IGTMConfig {
    gtmId: string;
    enabled?: boolean;
}
export declare const provideGTM: (config: IGTMConfig) => Provider;
