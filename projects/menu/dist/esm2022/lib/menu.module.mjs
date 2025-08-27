import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CamIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { CamContainerModule, CamLayoutModule, CamListModule, CamSwiperModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';
import { BottomSheetTemplateBasicComponent } from './components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component';
import { BottomSheetTemplateGenericComponent } from './components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ListComponent } from './components/list/list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuItemComponent } from './components/menu/item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QuickActionsCustomComponent } from './components/quick-actions-custom/quick-actions-custom.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { ToggleNavigationComponent } from './components/toggle-navigation/toggle-navigation.component';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamMenuModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent } from '@ta/library-name';
 */
export class CamMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, TranslatePipe, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, BottomSheetTemplateGenericComponent, MainMenuComponent, ListComponent, NavigationComponent], exports: [MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            QuickActionsComponent,
            QuickActionsCustomComponent,
            ToggleNavigationComponent,
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            NavigationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, MainMenuComponent, ListComponent, NavigationComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CamUiModule, CamSwiperModule, CamContainerModule, CamDirectivePipeModule, CamLayoutModule, CamListModule, CommonModule, RouterModule, CamIconsModule, MatMenuModule, TranslatePipe, MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent, QuickActionsComponent, QuickActionsCustomComponent, ToggleNavigationComponent, ContextMenuComponent, BottomSheetTemplateGenericComponent, MainMenuComponent, ListComponent, NavigationComponent],
                    exports: [
                        MenuComponent,
                        MenuItemComponent,
                        BottomSheetTemplateBasicComponent,
                        QuickActionsComponent,
                        QuickActionsCustomComponent,
                        ToggleNavigationComponent,
                        ContextMenuComponent,
                        BottomSheetTemplateGenericComponent,
                        MainMenuComponent,
                        NavigationComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUMxRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDMUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7QUFFdkc7Ozs7Ozs7Ozs7R0FVRztBQW1CSCxNQUFNLE9BQU8sYUFBYTsrR0FBYixhQUFhO2dIQUFiLGFBQWEsWUFmZCxXQUFXLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsaUNBQWlDLEVBQUUscUJBQXFCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUsbUNBQW1DLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixhQUVoYyxhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsbUNBQW1DO1lBQ25DLGlCQUFpQjtZQUNqQixtQkFBbUI7Z0hBSVYsYUFBYSxZQWZkLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQWlCLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxpQ0FBaUMsRUFBRSxxQkFBcUIsRUFBRSwyQkFBMkIsRUFBRSx5QkFBeUIsRUFBRSxvQkFBb0IsRUFBdUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQjs7NEZBZXZiLGFBQWE7a0JBbEJ6QixRQUFRO21CQUFDO29CQUVSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsaUNBQWlDLEVBQUUscUJBQXFCLEVBQUUsMkJBQTJCLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUsbUNBQW1DLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLG1CQUFtQixDQUFDO29CQUNuYyxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGlDQUFpQzt3QkFDakMscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtpQkFFRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FtSWNvbnNNb2R1bGUgfSBmcm9tICdAdGEvaWNvbnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBDYW1Db250YWluZXJNb2R1bGUsIENhbUxheW91dE1vZHVsZSwgQ2FtTGlzdE1vZHVsZSwgQ2FtU3dpcGVyTW9kdWxlLCBDYW1VaU1vZHVsZSB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBDYW1EaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JvdHRvbS1zaGVldC90ZW1wbGF0ZXMvYmFzaWMvYm90dG9tLXNoZWV0LXRlbXBsYXRlLWJhc2ljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3R0b20tc2hlZXQvdGVtcGxhdGVzL2dlbmVyaWMvYm90dG9tLXNoZWV0LXRlbXBsYXRlLWdlbmVyaWMuY29tcG9uZW50JztcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRleHQtbWVudS9jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYWluTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L2l0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFF1aWNrQWN0aW9uc0N1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9xdWljay1hY3Rpb25zLWN1c3RvbS9xdWljay1hY3Rpb25zLWN1c3RvbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUXVpY2tBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3F1aWNrLWFjdGlvbnMvcXVpY2stYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2dnbGUtbmF2aWdhdGlvbi90b2dnbGUtbmF2aWdhdGlvbi5jb21wb25lbnQnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IENhbU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqIFxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBNZW51Q29tcG9uZW50LCBNZW51SXRlbUNvbXBvbmVudCwgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NhbVVpTW9kdWxlLCBDYW1Td2lwZXJNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSwgQ2FtTGF5b3V0TW9kdWxlLCBDYW1MaXN0TW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgQ2FtSWNvbnNNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIFRyYW5zbGF0ZVBpcGUsIE1lbnVDb21wb25lbnQsIE1lbnVJdGVtQ29tcG9uZW50LCBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsIFF1aWNrQWN0aW9uc0NvbXBvbmVudCwgUXVpY2tBY3Rpb25zQ3VzdG9tQ29tcG9uZW50LCBUb2dnbGVOYXZpZ2F0aW9uQ29tcG9uZW50LCBDb250ZXh0TWVudUNvbXBvbmVudCwgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsIE1haW5NZW51Q29tcG9uZW50LCBMaXN0Q29tcG9uZW50LCBOYXZpZ2F0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIE1lbnVDb21wb25lbnQsXG4gICAgTWVudUl0ZW1Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICAgIFF1aWNrQWN0aW9uc0NvbXBvbmVudCxcbiAgICBRdWlja0FjdGlvbnNDdXN0b21Db21wb25lbnQsXG4gICAgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCxcbiAgICBNYWluTWVudUNvbXBvbmVudCxcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbU1lbnVNb2R1bGUge31cbiJdfQ==