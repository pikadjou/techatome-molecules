import { CommonModule } from '@angular/common';
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
import { TaUsersService } from './services/users.service';
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
                    deps: [TaUsersService],
                    useFactory: (usersService) => usersService.currentUser.get()?.culture ?? Culture.FR_BE,
                },
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule,
            CamCardModule,
            CamDirectivePipeModule,
            CamFormInputsModule,
            CommonModule,
            CamMenuModule,
            CamIconsModule,
            CamListModule,
            CamContainerModule,
            MatMenuModule,
            TranslatePipe,
            LoginCardComponent,
            MenuUserComponent,
            MyAccountComponent,
            GuardComponent,
            LoginRedirectComponent,
            TenantUrlDisplayerComponent,
            ContactCardComponent,
            SwitchLanguageComponent,
            SwitchLanguageCtaComponent,
            UserMyProfileComponent], exports: [LoginCardComponent,
            MenuUserComponent,
            MyAccountComponent,
            GuardComponent,
            LoginRedirectComponent,
            TenantUrlDisplayerComponent,
            ContactCardComponent,
            SwitchLanguageCtaComponent,
            UserMyProfileComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, imports: [CamUiModule,
            CamCardModule,
            CamDirectivePipeModule,
            CamFormInputsModule,
            CommonModule,
            CamMenuModule,
            CamIconsModule,
            CamListModule,
            CamContainerModule,
            MatMenuModule,
            LoginCardComponent,
            MenuUserComponent,
            MyAccountComponent,
            GuardComponent,
            TenantUrlDisplayerComponent,
            ContactCardComponent,
            SwitchLanguageComponent,
            SwitchLanguageCtaComponent,
            UserMyProfileComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamUserModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
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
                        MatMenuModule,
                        TranslatePipe,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQzVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQy9HLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFM0Q7Ozs7Ozs7Ozs7R0FVRztBQXVDSCxNQUFNLE9BQU8sYUFBYTtJQUN4QjtRQUNFLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtvQkFDOUIsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUN0QixVQUFVLEVBQUUsQ0FBQyxZQUE0QixFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSztpQkFDdkc7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOytHQWhCVSxhQUFhO2dIQUFiLGFBQWEsWUFuQ3RCLFdBQVc7WUFDWCxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsY0FBYztZQUNkLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QiwwQkFBMEI7WUFDMUIsc0JBQXNCLGFBR3RCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQiwwQkFBMEI7WUFDMUIsc0JBQXNCO2dIQUliLGFBQWEsWUFuQ3RCLFdBQVc7WUFDWCxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLG1CQUFtQjtZQUNuQixZQUFZO1lBQ1osYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGFBQWE7WUFFYixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixjQUFjO1lBRWQsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQix1QkFBdUI7WUFDdkIsMEJBQTBCO1lBQzFCLHNCQUFzQjs7NEZBZWIsYUFBYTtrQkF0Q3pCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asa0JBQWtCO3dCQUNsQixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxzQkFBc0I7d0JBQ3RCLDJCQUEyQjt3QkFDM0Isb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7aUJBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcblxuaW1wb3J0IHsgQ2FtRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IENhbUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IENhbU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbWVudSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IENhbUNhcmRNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtTGlzdE1vZHVsZSwgQ2FtVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgQ3VsdHVyZSwgREVGQVVMVF9VU0VSX0xBTkdVQUdFIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQ29udGFjdENhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdC1jYXJkL2NvbnRhY3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ3VhcmQvZ3VhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvZ2luL3JlZGlyZWN0L3JlZGlyZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51VXNlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUtdXNlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXlBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL215LWFjY291bnQvbXktYWNjb3VudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlck15UHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9teS1wcm9maWxlL3VzZXItbXktcHJvZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpdGNoTGFuZ3VhZ2VDdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3dpdGNoLWxhbmd1YWdlL3N3aXRjaC1sYW5ndWFnZS1jdGEvc3dpdGNoLWxhbmd1YWdlLWN0YS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3dpdGNoTGFuZ3VhZ2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3dpdGNoLWxhbmd1YWdlL3N3aXRjaC1sYW5ndWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVuYW50VXJsRGlzcGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RlbmFudC11cmwtZGlzcGxheWVyL3RlbmFudC11cmwtZGlzcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYVVzZXJzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblVzZXIgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtVXNlck1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgTG9naW5DYXJkQ29tcG9uZW50LCBNZW51VXNlckNvbXBvbmVudCwgTXlBY2NvdW50Q29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBDYW1VaU1vZHVsZSxcbiAgICBDYW1DYXJkTW9kdWxlLFxuICAgIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgQ2FtRm9ybUlucHV0c01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2FtTWVudU1vZHVsZSxcbiAgICBDYW1JY29uc01vZHVsZSxcbiAgICBDYW1MaXN0TW9kdWxlLFxuICAgIENhbUNvbnRhaW5lck1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxuICAgIE1lbnVVc2VyQ29tcG9uZW50LFxuICAgIE15QWNjb3VudENvbXBvbmVudCxcbiAgICBHdWFyZENvbXBvbmVudCxcbiAgICBMb2dpblJlZGlyZWN0Q29tcG9uZW50LFxuICAgIFRlbmFudFVybERpc3BsYXllckNvbXBvbmVudCxcbiAgICBDb250YWN0Q2FyZENvbXBvbmVudCxcbiAgICBTd2l0Y2hMYW5ndWFnZUNvbXBvbmVudCxcbiAgICBTd2l0Y2hMYW5ndWFnZUN0YUNvbXBvbmVudCxcbiAgICBVc2VyTXlQcm9maWxlQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTG9naW5DYXJkQ29tcG9uZW50LFxuICAgIE1lbnVVc2VyQ29tcG9uZW50LFxuICAgIE15QWNjb3VudENvbXBvbmVudCxcbiAgICBHdWFyZENvbXBvbmVudCxcbiAgICBMb2dpblJlZGlyZWN0Q29tcG9uZW50LFxuICAgIFRlbmFudFVybERpc3BsYXllckNvbXBvbmVudCxcbiAgICBDb250YWN0Q2FyZENvbXBvbmVudCxcbiAgICBTd2l0Y2hMYW5ndWFnZUN0YUNvbXBvbmVudCxcbiAgICBVc2VyTXlQcm9maWxlQ29tcG9uZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDYW1Vc2VyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2FtVHJhbnNsYXRpb25Vc2VyLmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhbVVzZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhbVVzZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IERFRkFVTFRfVVNFUl9MQU5HVUFHRSxcbiAgICAgICAgICBkZXBzOiBbVGFVc2Vyc1NlcnZpY2VdLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6ICh1c2Vyc1NlcnZpY2U6IFRhVXNlcnNTZXJ2aWNlKSA9PiB1c2Vyc1NlcnZpY2UuY3VycmVudFVzZXIuZ2V0KCk/LmN1bHR1cmUgPz8gQ3VsdHVyZS5GUl9CRSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19