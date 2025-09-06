import { Provider } from '@angular/core';
import { TaUserService } from './services/user.service';
export declare const provideUser: (data: {
    service: typeof TaUserService;
}) => Provider;
