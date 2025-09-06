import * as i0 from '@angular/core';
import { Injectable, inject, InjectionToken, Component, EventEmitter, signal, ViewChild, Output, Input } from '@angular/core';
import { map as map$1 } from 'rxjs/operators';
import { TaRoutes, MenuPanel, MenuIcon, Menu, MenuComponent, TaMainRoute } from '@ta/menu';
import { BehaviorSubject, filter, map, switchMap, distinct, tap } from 'rxjs';
import { Logger, GraphSchema, Apollo_gql, TaBaseService, HandleSimpleRequest } from '@ta/server';
import { isNonNullable, TaBaseComponent, StopPropagationDirective, TaAbstractComponent } from '@ta/utils';
import * as i1 from '@angular/router';
import { TranslatePipe, TaTranslationService } from '@ta/translation';
import { CardComponent, CardContentComponent, ButtonComponent, ListTagComponent, LoaderComponent, ListContainerComponent, ListElementComponent, ListTitleComponent, ErrorComponent, EmptyComponent, InlineProfileDataComponent } from '@ta/ui';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { FontIconComponent, TaIconType } from '@ta/icons';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService, provideAuth0 as provideAuth0$1, AuthHttpInterceptor } from '@auth0/auth0-angular';

const accessLevels = ['reader', 'contributor', 'administrator'];
class TaPermissionsService {
    get received() {
        return this._updated$.value !== null;
    }
    constructor() {
        this._updated$ = new BehaviorSubject(null);
        this._isFill = { permissions: false, isAuthenticated: false };
        this.features = [];
        this.guards = {};
        this.roles = [];
        this.isAuthenticated = false;
        this.updated$ = this._updated$.pipe(filter(isNonNullable));
    }
    set(info, isAuthenticated) {
        Logger.LogInfo('[PERMISSIONS] List brut:', info.permissions);
        this.features = info.features ?? [];
        this.roles = info.roles ?? [];
        this.guards = this.roles.reduce((acc, role) => {
            if (!role.includes('-')) {
                return acc;
            }
            const [domain, access] = role.split('-');
            const lastAccess = accessLevels.indexOf(access) > accessLevels.indexOf(acc[domain] || '') ? access : acc[domain];
            return {
                ...acc,
                [domain]: lastAccess,
            };
        }, {});
        Logger.LogInfo('[PERMISSIONS] Guard', this.guards);
        this._isFill.permissions = true;
        this.setSilentAuthenticated(isAuthenticated);
        this._canYouUpdate();
    }
    setSilentAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._isFill.isAuthenticated = true;
        this._canYouUpdate();
    }
    setAuthenticated(isAuthenticated) {
        this.isAuthenticated = isAuthenticated;
        this._updated$.next(Date.now());
    }
    hasRole(role) {
        return this.roles.some(x => x === role);
    }
    canDirectAccess(feature, level) {
        if (level === 'authenticated') {
            return this.isAuthenticated;
        }
        if (level === 'unauthenticated') {
            return !this.isAuthenticated;
        }
        if (level === 'authorize') {
            return this.features.includes(feature);
        }
        if (!feature) {
            return true;
        }
        const featureGuard = this.guards[feature];
        if (!featureGuard) {
            return true;
        }
        return accessLevels.indexOf(featureGuard) >= accessLevels.indexOf(level);
    }
    canAccess$(feature, level) {
        return this._updated$.pipe(map(() => this.canDirectAccess(feature, level)));
    }
    _canYouUpdate() {
        if (!this._isFill.isAuthenticated || !this._isFill.permissions) {
            return;
        }
        this._updated$.next(Date.now());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaPermissionsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class AuthGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(TaPermissionsService);
    }
    canActivate(next, state) {
        if (!this._permissionsService.received) {
            return this._permissionsService.updated$.pipe(map$1(() => {
                if (this._permissionsService.isAuthenticated) {
                    return true;
                }
                else {
                    this.setRedirect();
                    return false;
                }
            }));
        }
        if (this._permissionsService.isAuthenticated === false) {
            this.setRedirect();
            return false;
        }
        return this._permissionsService.isAuthenticated;
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getLogin());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });

class FeatureGuard {
    constructor(router) {
        this.router = router;
        this._permissionsService = inject(TaPermissionsService);
    }
    canActivate(route) {
        const level = route.data['level'];
        const feature = route.data['feature'];
        if (this._permissionsService.received === true) {
            return this._isValidPermission(feature, level);
        }
        return this._permissionsService.updated$.pipe(map$1(() => {
            return this._isValidPermission(feature, level);
        }));
    }
    setRedirect() {
        this.router.navigateByUrl(TaRoutes.getHome());
    }
    _isValidPermission(feature, level) {
        if (this._permissionsService.canDirectAccess(feature, level)) {
            return true;
        }
        this.setRedirect();
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FeatureGuard, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i1.Router }] });

/*
 * Public API Surface of users
 */

const userProfileBrutProps = ['id', 'firstname', 'lastname', 'email', 'picture'];
const userProfileProps = new GraphSchema(userProfileBrutProps);

function userInfo({ props }) {
    return {
        query: Apollo_gql `
        query UserInfo {
          userInfo {
            ${props}
          }
        }
      `,
        variables: {},
    };
}

const TA_USER_SERVICE = new InjectionToken('TaUserService_injection-token');
const graphEndpoint = {
    clientName: 'userService',
    endpoint: '',
};
class TaUserService extends TaBaseService {
    constructor() {
        super();
        this.userProfile = new HandleSimpleRequest();
        this.userDetail = new HandleSimpleRequest();
        super.registerRoutes({ graphEndpoint: graphEndpoint });
    }
    fetchUserProfile$(props = '') {
        return this.userProfile.fetch(this._graphService
            .fetchQuery(userInfo({
            props: `
              ${userProfileProps.get('id')}
              ${userProfileProps.get('firstname')}
              ${userProfileProps.get('lastname')}
              ${userProfileProps.get('email')}
              ${userProfileProps.get('picture')}
              ${props}
            `,
        }), 'userInfo', graphEndpoint.clientName)
            .pipe(filter(isNonNullable)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaUserService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const TA_AUTH_TOKEN = new InjectionToken('TaAuthService');
class TaAuthService extends TaBaseService {
    constructor(apiRoutes) {
        super(apiRoutes);
        this._permissionsService = inject(TaPermissionsService);
        this.isAuthenticated$ = this._permissionsService.canAccess$('', 'authenticated');
        this.user$ = new BehaviorSubject(null);
        this.user$
            .pipe(filter(user => !!user), switchMap(() => this.fetchUserProfile$()))
            .subscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuthService, deps: "invalid", target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuthService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuthService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: undefined }] });

class LoginCardComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
    }
    login() {
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LoginCardComponent, isStandalone: true, selector: "ta-login-card", ngImport: i0, template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{ 'user.login' | translate }}</ta-button>\n  </ta-card-content>\n</ta-card>\n", styles: [""], dependencies: [{ kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-login-card', standalone: true, imports: [CardComponent, CardContentComponent, ButtonComponent, TranslatePipe], template: "<ta-card (click)=\"this.login()\">\n  <ta-card-content>\n    <ta-button (action)=\"this.login()\">{{ 'user.login' | translate }}</ta-button>\n  </ta-card-content>\n</ta-card>\n" }]
        }], ctorParameters: () => [] });

class LoginRedirectComponent {
    constructor() {
        this._authService = inject(TA_AUTH_TOKEN);
        this._authService.login();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: LoginRedirectComponent, isStandalone: true, selector: "ng-component", ngImport: i0, template: '', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LoginRedirectComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '',
                    template: '',
                    standalone: true,
                }]
        }], ctorParameters: () => [] });

class SwitchLanguageComponent {
    constructor() {
        this.translateService = inject(TaTranslationService);
        this.languages = [
            { id: 'fr', name: 'Français' },
            { id: 'nl', name: 'Nederlands' },
            { id: 'en', name: 'English' },
            { id: 'es', name: 'Español' },
        ];
        this.activeLanguage = this.translateService.getLanguage();
        this.changeLanguageAsked = false;
    }
    changeLanguage(language) {
        if (this.activeLanguage != language) {
            this.activeLanguage = language;
            this.changeLanguageAsked = true;
            this.translateService.use(language);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: SwitchLanguageComponent, isStandalone: true, selector: "ta-switch-language", ngImport: i0, template: "<ta-loader [isLoading]=\"this.changeLanguageAsked\">\n  <div class=\"mx-space-sm language-panel\">\n    <ta-list-container>\n      @for (language of this.languages; track language.id) {\n        <ta-list-element [withSeparator]=\"false\" (click)=\"this.changeLanguage(language.id)\">\n          <ta-list-title class=\"d-flex p-space-xs\">\n            {{ language.name | translate }}\n          </ta-list-title>\n          @if (language.id === this.activeLanguage) {\n            <ta-list-tag>\n              <ta-font-icon name=\"check-line\" class=\"color-semantic-token-success\"></ta-font-icon>\n            </ta-list-tag>\n          }\n        </ta-list-element>\n      }\n    </ta-list-container>\n  </div>\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ListTagComponent, selector: "ta-list-tag" }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ListContainerComponent, selector: "ta-list-container" }, { kind: "component", type: ListElementComponent, selector: "ta-list-element", inputs: ["withSeparator", "flexColumn"], outputs: ["action"] }, { kind: "component", type: ListTitleComponent, selector: "ta-list-title" }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-switch-language', standalone: true, imports: [
                        NgIf,
                        NgFor,
                        FontIconComponent,
                        ListTagComponent,
                        LoaderComponent,
                        ListContainerComponent,
                        ListElementComponent,
                        ListTitleComponent,
                        TranslatePipe,
                    ], template: "<ta-loader [isLoading]=\"this.changeLanguageAsked\">\n  <div class=\"mx-space-sm language-panel\">\n    <ta-list-container>\n      @for (language of this.languages; track language.id) {\n        <ta-list-element [withSeparator]=\"false\" (click)=\"this.changeLanguage(language.id)\">\n          <ta-list-title class=\"d-flex p-space-xs\">\n            {{ language.name | translate }}\n          </ta-list-title>\n          @if (language.id === this.activeLanguage) {\n            <ta-list-tag>\n              <ta-font-icon name=\"check-line\" class=\"color-semantic-token-success\"></ta-font-icon>\n            </ta-list-tag>\n          }\n        </ta-list-element>\n      }\n    </ta-list-container>\n  </div>\n</ta-loader>\n" }]
        }] });

class MyAccountComponent extends TaBaseComponent {
    constructor() {
        super();
        this.infosMenu = null;
        this.appVersion = null;
        this.isEditable = false;
        this.navigateEvent = new EventEmitter();
        this.navigateEditEvent = new EventEmitter();
        this._userService = inject(TA_USER_SERVICE);
        this._authService = inject(TA_AUTH_TOKEN);
        this.profileMenu = signal(null);
        this.disconnectionMenu = signal(null);
        this.userLogo$ = signal(this._userService.userProfile.get$().pipe(map(up => {
            if (!up) {
                return null;
            }
            return {
                user: {
                    picture: up.picture,
                    lastname: up.lastname ?? '',
                    firstname: up.firstname ?? '',
                },
                size: 'lg',
            };
        })));
    }
    get profile$() {
        return this._userService.userProfile.get$().pipe(map(data => {
            return {
                title: {
                    second: data?.firstname || data?.lastname,
                },
                email: data?.email || '',
            };
        }));
    }
    ngAfterViewInit() {
        this.profileMenu.set(this.getProfileMenu(this.languageTemplate, this.infosTemplate));
        this.disconnectionMenu.set(this.getDisconnectionMenu());
    }
    navigateToProfile() {
        this.navigateEvent.emit();
    }
    disconnect() {
        this._authService.logout().then(() => location.reload());
    }
    getProfileMenu(languageTemplate, infosTemplate) {
        const menu = [
            new MenuPanel({
                key: 'language',
                label: 'user.language',
                order: 2,
                template: languageTemplate,
                style: 'dark',
                icon: 'language',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuPanel({
                key: 'infos',
                label: 'user.infos',
                order: 3,
                template: infosTemplate,
                style: 'dark',
                icon: 'infos',
                iconsColor: 'icon-color-icon-tertiary',
                endingIcon: 'arrow-big-right',
            }),
            new MenuIcon({
                key: 'params',
                label: 'user.params',
                order: 4,
                disabled: true,
                style: 'dark',
                icon: 'label',
                iconsColor: 'icon-color-icon-tertiary',
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
    }
    getDisconnectionMenu() {
        const menu = [
            new MenuIcon({
                key: 'logout',
                label: 'user.logout',
                order: 4,
                style: 'dark',
                icon: 'log-out',
                iconsColor: 'icon-color-icon-tertiary',
                callback: () => this.disconnect(),
            }),
        ];
        return new Menu({
            elements: menu.sort((a, b) => a.order - b.order),
            direction: 'vertical',
        });
    }
    navigateToEditProfile() {
        this.navigateEditEvent.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MyAccountComponent, isStandalone: true, selector: "ta-my-account", inputs: { infosMenu: "infosMenu", appVersion: "appVersion", isEditable: "isEditable" }, outputs: { navigateEvent: "navigateEvent", navigateEditEvent: "navigateEditEvent" }, viewQueries: [{ propertyName: "languageTemplate", first: true, predicate: ["languageTemplate"], descendants: true, static: true }, { propertyName: "infosTemplate", first: true, predicate: ["infosTemplate"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n@let profileMenu = this.profileMenu();\n  @if (profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"m-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MenuComponent, selector: "ta-menu", inputs: ["menu", "container"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "pipe", type: TranslatePipe, name: "translate" }, { kind: "component", type: InlineProfileDataComponent, selector: "ta-inline-profile-data", inputs: ["profile", "userLogo"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MyAccountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-my-account', standalone: true, imports: [
                        AsyncPipe,
                        FontIconComponent,
                        StopPropagationDirective,
                        LoaderComponent,
                        ErrorComponent,
                        EmptyComponent,
                        ButtonComponent,
                        MenuComponent,
                        SwitchLanguageComponent,
                        TranslatePipe,
                        InlineProfileDataComponent,
                        StopPropagationDirective,
                    ], template: "@let profile = this.profile$ | async;\n<div class=\"mx-space-sm\" appStopPropagation>\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <ta-error [message]=\"this.requestState.getErrorMessage()\" [code]=\"this.requestState.getErrorStatus()\">\n      <ta-empty [isEmpty]=\"!profile\">\n          <div class=\"p-space-sm bdp-b color-border-primary\">\n            <ta-inline-profile-data\n              [profile]=\"profile ?? {}\"\n              [userLogo]=\"this.userLogo$() | async\"\n              (click)=\"this.navigateToProfile()\"\n            ></ta-inline-profile-data>\n            @if (this.isEditable) {\n              <div class=\"my-space-md\">\n                <ta-button (action)=\"this.navigateToEditProfile()\" [style]=\"'secondary'\">\n                  <div class=\"align-center button-content\">\n                    <ta-font-icon name=\"modify\" class=\"mr-space-xs modify-icon\"></ta-font-icon>\n                    <div class=\"text\">\n                      {{ 'user.modify' | translate }}\n                    </div>\n                  </div>\n                </ta-button>\n              </div>\n            }\n          </div>\n      </ta-empty>\n    </ta-error>\n  </ta-loader>\n@let profileMenu = this.profileMenu();\n  @if (profileMenu) {\n    <div class=\"bdp-b color-border-primary pt-space-xs\">\n      <ta-menu [menu]=\"profileMenu\" [style]=\"'dark'\" [container]=\"'overflow'\"></ta-menu>\n    </div>\n  }\n@let disconnectionMenu = this.disconnectionMenu();\n  @if (disconnectionMenu) {\n    <div class=\"bdp-b pt-space-xs\">\n      <ta-menu [menu]=\"disconnectionMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n  <div class=\"ta-c\">\n    <small>{{ this.appVersion }}</small>\n  </div>\n</div>\n\n<ng-template #languageTemplate>\n  <ta-switch-language></ta-switch-language>\n</ng-template>\n\n<ng-template #infosTemplate>\n  @if (this.infosMenu) {\n    <div class=\"m-space-sm info-panel\">\n      <ta-menu [menu]=\"this.infosMenu\" [style]=\"'dark'\"></ta-menu>\n    </div>\n  }\n</ng-template>\n", styles: [".modify-icon{color:var(--ta-brand-700)}.language-panel{min-width:240px}.text{font-size:var(--ta-font-body-md-default-size);line-height:var(--ta-font-body-md-default-line);font-weight:var(--ta-font-body-md-default-weight)}.button-content{justify-content:center}\n"] }]
        }], ctorParameters: () => [], propDecorators: { infosMenu: [{
                type: Input
            }], appVersion: [{
                type: Input
            }], isEditable: [{
                type: Input
            }], navigateEvent: [{
                type: Output
            }], navigateEditEvent: [{
                type: Output
            }], languageTemplate: [{
                type: ViewChild,
                args: ['languageTemplate', { static: true }]
            }], infosTemplate: [{
                type: ViewChild,
                args: ['infosTemplate', { static: true }]
            }] } });

class GuardComponent extends TaAbstractComponent {
    get noAccessIcon() {
        return TaIconType.NoAccess;
    }
    constructor() {
        super();
        this.canDisplayErrorMessage = true;
        this._permissionsService = inject(TaPermissionsService);
    }
    isGuardValid$() {
        return this._permissionsService.canAccess$(this.feature, this.level);
    }
    goToLogin() {
        this._router.navigateByUrl(TaRoutes.getUrl([TaMainRoute.USERLOGIN]));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: GuardComponent, isStandalone: true, selector: "ta-guard", inputs: { level: "level", feature: "feature", canDisplayErrorMessage: "canDisplayErrorMessage" }, usesInheritance: true, ngImport: i0, template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!isValid && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n", styles: [""], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "pipe", type: TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: GuardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-guard', standalone: true, imports: [AsyncPipe, FontIconComponent, ButtonComponent, TranslatePipe], template: "@let isValid = this.isGuardValid$() | async;\n\n<div class=\"guard\">\n  @if (isValid) {\n    <div class=\"guard-valid\">\n      <ng-content></ng-content>\n    </div>\n  }\n  @if (!isValid && this.canDisplayErrorMessage) {\n    <div class=\"guard-no-valid ta-c\">\n      <ta-font-icon name=\"close-tool\" size=\"md\"></ta-font-icon>\n      {{ 'container.guard.content' | translate }}\n\n      @if (this.level === 'authenticated') {\n        <ta-button (action)=\"this.goToLogin()\"> Me connecter </ta-button>\n      }\n    </div>\n  }\n</div>\n" }]
        }], ctorParameters: () => [], propDecorators: { level: [{
                type: Input
            }], feature: [{
                type: Input
            }], canDisplayErrorMessage: [{
                type: Input
            }] } });

class SwitchLanguageCtaComponent {
    constructor() {
        this.translateService = inject(TaTranslationService);
        this.activeLanguage = this.translateService.getLanguage();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageCtaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: SwitchLanguageCtaComponent, isStandalone: true, selector: "ta-switch-language-cta", ngImport: i0, template: "<div [matMenuTriggerFor]=\"menu\" class=\"flex-start g-space-sm c-pointer\">\n  {{ this.activeLanguage.toLocaleUpperCase() }}\n  <ta-font-icon name=\"arrow-big-bottom\"></ta-font-icon>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  <ta-switch-language></ta-switch-language>\n</mat-menu>\n", styles: [""], dependencies: [{ kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: SwitchLanguageComponent, selector: "ta-switch-language" }, { kind: "directive", type: MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: SwitchLanguageCtaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-switch-language-cta', standalone: true, imports: [FontIconComponent, MatMenu, SwitchLanguageComponent, MatMenuTrigger], template: "<div [matMenuTriggerFor]=\"menu\" class=\"flex-start g-space-sm c-pointer\">\n  {{ this.activeLanguage.toLocaleUpperCase() }}\n  <ta-font-icon name=\"arrow-big-bottom\"></ta-font-icon>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  <ta-switch-language></ta-switch-language>\n</mat-menu>\n" }]
        }] });

const provideUser = (data) => [
    { provide: TA_USER_SERVICE, useClass: data.service },
];

class TaAuth0Service extends TaAuthService {
    get userProfile$() {
        return this.userService.userProfile.get$();
    }
    constructor() {
        super();
        this.auth = inject(AuthService);
        this.userService = inject(TA_USER_SERVICE);
        this.auth.user$
            .pipe(filter(isNonNullable), distinct(user => user?.sub), tap(user => this.user$.next(user || null)), tap(user => {
            Logger.LogInfo('user info', user);
            if (user) {
                this._permissionsService.set({
                    permissions: [],
                    roles: [],
                    features: [],
                }, true);
            }
        }))
            .subscribe();
        this.auth.error$
            .pipe(tap(errors => {
            Logger.LogError('[USERSERVICE] error on authentication', errors);
        }))
            .subscribe();
        this.auth.appState$
            .pipe(tap(state => {
            Logger.LogInfo('[USERSERVICE] state', state);
        }))
            .subscribe();
        this.auth.isAuthenticated$
            .pipe(tap(isAuthenticated => {
            this._serverService.isAuthenticated = isAuthenticated;
            if (isAuthenticated) {
                this._permissionsService.setSilentAuthenticated(isAuthenticated);
            }
            else {
                this._permissionsService.setAuthenticated(isAuthenticated);
            }
        }))
            .subscribe();
    }
    fetchUserProfile$() {
        return this.userService.fetchUserProfile$();
    }
    load() { }
    login() {
        this.auth.loginWithRedirect();
    }
    logout() {
        return new Promise(resolve => {
            this.auth.logout();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: TaAuth0Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

const provideAuth0 = (data) => [
    provideAuth0$1(data.config),
    { provide: TA_AUTH_TOKEN, useClass: TaAuth0Service },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthHttpInterceptor,
        multi: true,
    },
];

/*
 * Public API Surface of users
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuard, FeatureGuard, GuardComponent, LoginCardComponent, LoginRedirectComponent, MyAccountComponent, SwitchLanguageCtaComponent, TA_AUTH_TOKEN, TA_USER_SERVICE, TaAuthService, TaPermissionsService, TaUserService, provideAuth0, provideUser, userProfileBrutProps, userProfileProps };
//# sourceMappingURL=ta-user.mjs.map
