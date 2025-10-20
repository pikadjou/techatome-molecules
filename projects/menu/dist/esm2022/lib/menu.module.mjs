import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaContainerModule, TaLayoutModule, TaListModule, TaSwiperModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
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
 * // import { TaMenuModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { MenuComponent, MenuItemComponent, BottomSheetTemplateBasicComponent } from '@ta/library-name';
 */
export class TaMenuModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaMenuModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaMenuModule, imports: [TaUiModule,
            TaSwiperModule,
            TaContainerModule,
            TaDirectivePipeModule,
            TaLayoutModule,
            TaListModule,
            CommonModule,
            RouterModule,
            TaIconsModule,
            MatMenuModule,
            TranslatePipe,
            MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            QuickActionsComponent,
            QuickActionsCustomComponent,
            ToggleNavigationComponent,
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            ListComponent,
            NavigationComponent], exports: [MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            QuickActionsComponent,
            QuickActionsCustomComponent,
            ToggleNavigationComponent,
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            NavigationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaMenuModule, imports: [TaUiModule,
            TaSwiperModule,
            TaContainerModule,
            TaDirectivePipeModule,
            TaLayoutModule,
            TaListModule,
            CommonModule,
            RouterModule,
            TaIconsModule,
            MatMenuModule,
            MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            QuickActionsComponent,
            QuickActionsCustomComponent,
            ToggleNavigationComponent,
            ContextMenuComponent,
            MainMenuComponent,
            ListComponent,
            NavigationComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaMenuModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        TaUiModule,
                        TaSwiperModule,
                        TaContainerModule,
                        TaDirectivePipeModule,
                        TaLayoutModule,
                        TaListModule,
                        CommonModule,
                        RouterModule,
                        TaIconsModule,
                        MatMenuModule,
                        TranslatePipe,
                        MenuComponent,
                        MenuItemComponent,
                        BottomSheetTemplateBasicComponent,
                        QuickActionsComponent,
                        QuickActionsCustomComponent,
                        ToggleNavigationComponent,
                        ContextMenuComponent,
                        BottomSheetTemplateGenericComponent,
                        MainMenuComponent,
                        ListComponent,
                        NavigationComponent,
                    ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFbEQsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUZBQXFGLENBQUM7QUFDMUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUMvRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7QUFFdkc7Ozs7Ozs7Ozs7R0FVRztBQXdDSCxNQUFNLE9BQU8sWUFBWTsrR0FBWixZQUFZO2dIQUFaLFlBQVksWUFwQ3JCLFVBQVU7WUFDVixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixpQ0FBaUM7WUFDakMscUJBQXFCO1lBQ3JCLDJCQUEyQjtZQUMzQix5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLG1DQUFtQztZQUNuQyxpQkFBaUI7WUFDakIsYUFBYTtZQUNiLG1CQUFtQixhQUduQixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFDcEIsbUNBQW1DO1lBQ25DLGlCQUFpQjtZQUNqQixtQkFBbUI7Z0hBR1YsWUFBWSxZQXBDckIsVUFBVTtZQUNWLGNBQWM7WUFDZCxpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUViLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQUVwQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLG1CQUFtQjs7NEZBZVYsWUFBWTtrQkF2Q3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxVQUFVO3dCQUNWLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGlDQUFpQzt3QkFDakMscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsaUNBQWlDO3dCQUNqQyxxQkFBcUI7d0JBQ3JCLDJCQUEyQjt3QkFDM0IseUJBQXlCO3dCQUN6QixvQkFBb0I7d0JBQ3BCLG1DQUFtQzt3QkFDbkMsaUJBQWlCO3dCQUNqQixtQkFBbUI7cUJBQ3BCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRNZW51TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSAnQHRhL2ljb25zJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgVGFDb250YWluZXJNb2R1bGUsIFRhTGF5b3V0TW9kdWxlLCBUYUxpc3RNb2R1bGUsIFRhU3dpcGVyTW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3R0b20tc2hlZXQvdGVtcGxhdGVzL2Jhc2ljL2JvdHRvbS1zaGVldC10ZW1wbGF0ZS1iYXNpYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm90dG9tLXNoZWV0L3RlbXBsYXRlcy9nZW5lcmljL2JvdHRvbS1zaGVldC10ZW1wbGF0ZS1nZW5lcmljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9pdGVtL21lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRdWlja0FjdGlvbnNDdXN0b21Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcXVpY2stYWN0aW9ucy1jdXN0b20vcXVpY2stYWN0aW9ucy1jdXN0b20uY29tcG9uZW50JztcbmltcG9ydCB7IFF1aWNrQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9xdWljay1hY3Rpb25zL3F1aWNrLWFjdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFRvZ2dsZU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlLW5hdmlnYXRpb24vdG9nZ2xlLW5hdmlnYXRpb24uY29tcG9uZW50JztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc3RhbmRhbG9uZSBjb21wb25lbnRzIGluc3RlYWQuXG4gKiBUaGlzIG1vZHVsZSB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSW5zdGVhZCBvZiBpbXBvcnRpbmcgdGhlIG1vZHVsZTpcbiAqIC8vIGltcG9ydCB7IFRhTWVudU1vZHVsZSB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICpcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgTWVudUNvbXBvbmVudCwgTWVudUl0ZW1Db21wb25lbnQsIEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgVGFVaU1vZHVsZSxcbiAgICBUYVN3aXBlck1vZHVsZSxcbiAgICBUYUNvbnRhaW5lck1vZHVsZSxcbiAgICBUYURpcmVjdGl2ZVBpcGVNb2R1bGUsXG4gICAgVGFMYXlvdXRNb2R1bGUsXG4gICAgVGFMaXN0TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgVGFJY29uc01vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBNZW51SXRlbUNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsXG4gICAgUXVpY2tBY3Rpb25zQ29tcG9uZW50LFxuICAgIFF1aWNrQWN0aW9uc0N1c3RvbUNvbXBvbmVudCxcbiAgICBUb2dnbGVOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgIE1haW5NZW51Q29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1lbnVDb21wb25lbnQsXG4gICAgTWVudUl0ZW1Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICAgIFF1aWNrQWN0aW9uc0NvbXBvbmVudCxcbiAgICBRdWlja0FjdGlvbnNDdXN0b21Db21wb25lbnQsXG4gICAgVG9nZ2xlTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldFRlbXBsYXRlR2VuZXJpY0NvbXBvbmVudCxcbiAgICBNYWluTWVudUNvbXBvbmVudCxcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUYU1lbnVNb2R1bGUge31cbiJdfQ==