import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@ta/ui";
import * as i2 from "@ta/utils";
import * as i3 from "@ta/form-input";
import * as i4 from "@angular/common";
import * as i5 from "@ta/menu";
import * as i6 from "@ta/icons";
import * as i7 from "@angular/material/menu";
import * as i8 from "@ta/translation";
import * as i9 from "./components/login/login-card.component";
import * as i10 from "./components/menu/menu-user.component";
import * as i11 from "./components/my-account/my-account.component";
import * as i12 from "./components/guard/guard.component";
import * as i13 from "./components/login/redirect/redirect.component";
import * as i14 from "./components/tenant-url-displayer/tenant-url-displayer.component";
import * as i15 from "./components/contact-card/contact-card.component";
import * as i16 from "./components/switch-language/switch-language.component";
import * as i17 from "./components/switch-language/switch-language-cta/switch-language-cta.component";
import * as i18 from "./components/my-profile/user-my-profile.component";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamUserModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { LoginCardComponent, MenuUserComponent, MyAccountComponent } from '@ta/library-name';
 */
export declare class CamUserModule {
    constructor();
    static forRoot(): ModuleWithProviders<CamUserModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamUserModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CamUserModule, never, [typeof i1.CamUiModule, typeof i1.CamCardModule, typeof i2.CamDirectivePipeModule, typeof i3.CamFormInputsModule, typeof i4.CommonModule, typeof i5.CamMenuModule, typeof i6.CamIconsModule, typeof i1.CamListModule, typeof i1.CamContainerModule, typeof i7.MatMenuModule, typeof i8.TranslatePipe, typeof i9.LoginCardComponent, typeof i10.MenuUserComponent, typeof i11.MyAccountComponent, typeof i12.GuardComponent, typeof i13.LoginRedirectComponent, typeof i14.TenantUrlDisplayerComponent, typeof i15.ContactCardComponent, typeof i16.SwitchLanguageComponent, typeof i17.SwitchLanguageCtaComponent, typeof i18.UserMyProfileComponent], [typeof i9.LoginCardComponent, typeof i10.MenuUserComponent, typeof i11.MyAccountComponent, typeof i12.GuardComponent, typeof i13.LoginRedirectComponent, typeof i14.TenantUrlDisplayerComponent, typeof i15.ContactCardComponent, typeof i17.SwitchLanguageCtaComponent, typeof i18.UserMyProfileComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CamUserModule>;
}
