import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import * as i0 from "@angular/core";
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
export class CamUserModule {
    constructor() {
        CamTranslationUser.getInstance();
    }
    static forRoot() {
        return {
            ngModule: CamUserModule,
            providers: [
                {
                    provide: DEFAULT_USER_LANGUAGE,
                    deps: [CamUsersService],
                    useFactory: (usersService) => usersService.currentUser.get()?.culture ?? Culture.FR_BE,
                },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ContactScopeInterceptor,
                    multi: true,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, TranslatePipe, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, LoginRedirectComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent], exports: [LoginCardComponent,
            MenuUserComponent,
            MyAccountComponent,
            GuardComponent,
            LoginRedirectComponent,
            TenantUrlDisplayerComponent,
            ContactCardComponent,
            SwitchLanguageCtaComponent,
            UserMyProfileComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CamUiModule, CamCardModule, CamDirectivePipeModule, CamFormInputsModule, CommonModule, CamMenuModule, CamIconsModule, CamListModule, CamContainerModule, MatMenuModule, TranslatePipe, LoginCardComponent, MenuUserComponent, MyAccountComponent, GuardComponent, LoginRedirectComponent, TenantUrlDisplayerComponent, ContactCardComponent, SwitchLanguageComponent, SwitchLanguageCtaComponent, UserMyProfileComponent],
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
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8s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QUUsRUFBRTtpQkFFZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbmltcG9ydCB7IENhbUZvcm1JbnB1dHNNb2R1bGUgfSBmcm9tICdAdGEvZm9ybS1pbnB1dCc7XG5pbXBvcnQgeyBDYW1JY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBDYW1NZW51TW9kdWxlIH0gZnJvbSAnQHRhL21lbnUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1DYXJkTW9kdWxlLCBDYW1Db250YWluZXJNb2R1bGUsIENhbUxpc3RNb2R1bGUsIENhbVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIEN1bHR1cmUsIERFRkFVTFRfVVNFUl9MQU5HVUFHRSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENvbnRhY3RDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhY3QtY2FyZC9jb250YWN0LWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IEd1YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2d1YXJkL2d1YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4tY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5SZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9yZWRpcmVjdC9yZWRpcmVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudVVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9tZW51LXVzZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE15QWNjb3VudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9teS1hY2NvdW50L215LWFjY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJNeVByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbXktcHJvZmlsZS91c2VyLW15LXByb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaExhbmd1YWdlQ3RhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N3aXRjaC1sYW5ndWFnZS9zd2l0Y2gtbGFuZ3VhZ2UtY3RhL3N3aXRjaC1sYW5ndWFnZS1jdGEuY29tcG9uZW50JztcbmltcG9ydCB7IFN3aXRjaExhbmd1YWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N3aXRjaC1sYW5ndWFnZS9zd2l0Y2gtbGFuZ3VhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFRlbmFudFVybERpc3BsYXllckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZW5hbnQtdXJsLWRpc3BsYXllci90ZW5hbnQtdXJsLWRpc3BsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdFNjb3BlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2NvbnRhY3RTY29wZUludGVyY2VwdG9yJztcbmltcG9ydCB7IENhbVVzZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVzZXIgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbVVzZXJNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBMb2dpbkNhcmRDb21wb25lbnQsIE1lbnVVc2VyQ29tcG9uZW50LCBNeUFjY291bnRDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcblxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbQ2FtVWlNb2R1bGUsIENhbUNhcmRNb2R1bGUsIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIENhbUZvcm1JbnB1dHNNb2R1bGUsIENvbW1vbk1vZHVsZSwgQ2FtTWVudU1vZHVsZSwgQ2FtSWNvbnNNb2R1bGUsIENhbUxpc3RNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgTWF0TWVudU1vZHVsZSwgVHJhbnNsYXRlUGlwZSwgTG9naW5DYXJkQ29tcG9uZW50LCBNZW51VXNlckNvbXBvbmVudCwgTXlBY2NvdW50Q29tcG9uZW50LCBHdWFyZENvbXBvbmVudCwgTG9naW5SZWRpcmVjdENvbXBvbmVudCwgVGVuYW50VXJsRGlzcGxheWVyQ29tcG9uZW50LCBDb250YWN0Q2FyZENvbXBvbmVudCwgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQsIFN3aXRjaExhbmd1YWdlQ3RhQ29tcG9uZW50LCBVc2VyTXlQcm9maWxlQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIExvZ2luQ2FyZENvbXBvbmVudCxcbiAgICBNZW51VXNlckNvbXBvbmVudCxcbiAgICBNeUFjY291bnRDb21wb25lbnQsXG4gICAgR3VhcmRDb21wb25lbnQsXG4gICAgTG9naW5SZWRpcmVjdENvbXBvbmVudCxcbiAgICBUZW5hbnRVcmxEaXNwbGF5ZXJDb21wb25lbnQsXG4gICAgQ29udGFjdENhcmRDb21wb25lbnQsXG4gICAgU3dpdGNoTGFuZ3VhZ2VDdGFDb21wb25lbnQsXG4gICAgVXNlck15UHJvZmlsZUNvbXBvbmVudCxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXSxcblxufSlcbmV4cG9ydCBjbGFzcyBDYW1Vc2VyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2FtVHJhbnNsYXRpb25Vc2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhbVVzZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbVVzZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERFRkFVTFRfVVNFUl9MQU5HVUFHRSxcbiAgICAgICAgICBkZXBzOiBbQ2FtVXNlcnNTZXJ2aWNlXSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiAodXNlcnNTZXJ2aWNlOiBDYW1Vc2Vyc1NlcnZpY2UpID0+IHVzZXJzU2VydmljZS5jdXJyZW50VXNlci5nZXQoKT8uY3VsdHVyZSA/PyBDdWx0dXJlLkZSX0JFLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICAgICAgdXNlQ2xhc3M6IENvbnRhY3RTY29wZUludGVyY2VwdG9yLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=