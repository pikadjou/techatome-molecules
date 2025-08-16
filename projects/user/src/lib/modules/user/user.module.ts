import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

import { CamFormInputsModule } from '@ta/form-input';
import { CamIconsModule } from '@ta/icons';
import { CamMenuModule } from '@ta/menu';
import { TranslatePipe } from '@ta/translation';
import { CamCardModule, CamContainerModule, CamListModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule, Culture, DEFAULT_USER_LANGUAGE } from '@ta/utils';

import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { GuardComponent } from './components/guard/guard.component';
import { LoginCardComponent } from './components/login/login-card.component';
import { LoginRedirectComponent } from './components/login/redirect/redirect.component';
import { MenuUserComponent } from './components/menu/menu-user.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { UserMyProfileComponent } from './components/my-profile/user-my-profile.component';
import { SwitchLanguageCtaComponent } from './components/switch-language/switch-language-cta/switch-language-cta.component';
import { SwitchLanguageComponent } from './components/switch-language/switch-language.component';
import { TenantUrlDisplayerComponent } from './components/tenant-url-displayer/tenant-url-displayer.component';
import { ContactScopeInterceptor } from './contactScopeInterceptor';
import { CamUsersService } from './services/users.service';
import { CamTranslationUser } from './translation.service';

@NgModule({
  declarations: [
    LoginCardComponent,
    MenuUserComponent,
    MyAccountComponent,
    GuardComponent,
    LoginRedirectComponent,
    TenantUrlDisplayerComponent,
    ContactCardComponent,
    SwitchLanguageComponent,
    SwitchLanguageCtaComponent,
    UserMyProfileComponent,
  ],
  imports: [
    CamUiModule,
    CamCardModule,
    CamDirectivePipeModule,
    CamFormInputsModule,
    CommonModule,
    CamMenuModule,
    CamIconsModule,
    CamListModule,
    CamContainerModule,
    CamListModule,
    MatMenuModule,
    TranslatePipe,
  ],
  exports: [
    LoginCardComponent,
    MenuUserComponent,
    MyAccountComponent,
    GuardComponent,
    LoginRedirectComponent,
    TenantUrlDisplayerComponent,
    ContactCardComponent,
    SwitchLanguageCtaComponent,
    UserMyProfileComponent,
  ],
  providers: [],
})
export class CamUserModule {
  constructor() {
    CamTranslationUser.getInstance();
  }

  static forRoot(): ModuleWithProviders<CamUserModule> {
    return {
      ngModule: CamUserModule,
      providers: [
        {
          provide: DEFAULT_USER_LANGUAGE,
          deps: [CamUsersService],
          useFactory: (usersService: CamUsersService) => usersService.currentUser.get()?.culture ?? Culture.FR_BE,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ContactScopeInterceptor,
          multi: true,
        },
      ],
    };
  }
}
