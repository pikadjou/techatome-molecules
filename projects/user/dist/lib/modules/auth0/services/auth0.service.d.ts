import { Observable } from 'rxjs';
import { TaAuthService } from '../../user/services/auth.service';
import * as i0 from "@angular/core";
export declare class TaAuth0Service extends TaAuthService {
    get userProfile$(): Observable<import("@ta/user").UserProfile | null>;
    private _auth;
    private _userService;
    private _translation;
    private _http;
    private _authClientConfig;
    constructor();
    fetchUserProfile$(): Observable<import("@ta/user").UserProfile>;
    changePassword$(): Observable<string>;
    load(): void;
    login(): void;
    signin(): void;
    logout(): Promise<null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAuth0Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaAuth0Service>;
}
