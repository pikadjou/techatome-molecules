import { User } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CamConfigurationService {
    organizationName$: BehaviorSubject<string>;
    constructor();
    set(user: User): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamConfigurationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamConfigurationService>;
}
