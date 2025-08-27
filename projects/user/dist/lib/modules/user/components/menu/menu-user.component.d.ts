import { OnDestroy } from '@angular/core';
import { InputDropdown } from '@ta/form-model';
import { CamTranslationService } from '@ta/translation';
import { TaBaseComponent } from '@ta/utils';
import { CamPermissionsService } from '../../services/permissions.service';
import * as i0 from "@angular/core";
export declare class MenuUserComponent extends TaBaseComponent implements OnDestroy {
    translateService: CamTranslationService;
    readonly _permissionsService: CamPermissionsService;
    get roles(): string[];
    get getFirstLetter(): string | null;
    authService: import("../../services/auth.service").CamAuthService<any>;
    language: InputDropdown<string>;
    constructor(translateService: CamTranslationService);
    login(): void;
    logout(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuUserComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuUserComponent, "ta-user-menu", never, {}, {}, never, never, true, never>;
}
