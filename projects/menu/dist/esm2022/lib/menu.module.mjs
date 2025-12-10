import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { RouterModule } from "@angular/router";
import { TaIconsModule } from "@ta/icons";
import { TranslatePipe } from "@ta/translation";
import { TaContainerModule, TaLayoutModule, TaListModule, TaSwiperModule, TaUiModule, } from "@ta/ui";
import { TaDirectivePipeModule } from "@ta/utils";
import { BottomSheetTemplateBasicComponent } from "./components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component";
import { BottomSheetTemplateGenericComponent } from "./components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component";
import { ContextMenuComponent } from "./components/context-menu/context-menu.component";
import { ListComponent } from "./components/list/list.component";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { MenuItemComponent } from "./components/menu/item/menu-item.component";
import { MenuComponent } from "./components/menu/menu.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { QuickActionsCustomComponent } from "./components/quick-actions-custom/quick-actions-custom.component";
import { QuickActionsComponent } from "./components/quick-actions/quick-actions.component";
import { ToggleNavigationComponent } from "./components/toggle-navigation/toggle-navigation.component";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsWUFBWSxFQUNaLGNBQWMsRUFDZCxVQUFVLEdBQ1gsTUFBTSxRQUFRLENBQUM7QUFDaEIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWxELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFGQUFxRixDQUFDO0FBQzFJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDL0csT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7O0FBRXZHOzs7Ozs7Ozs7O0dBVUc7QUF3Q0gsTUFBTSxPQUFPLFlBQVk7K0dBQVosWUFBWTtnSEFBWixZQUFZLFlBcENyQixVQUFVO1lBQ1YsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsY0FBYztZQUNkLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHFCQUFxQjtZQUNyQiwyQkFBMkI7WUFDM0IseUJBQXlCO1lBQ3pCLG9CQUFvQjtZQUNwQixtQ0FBbUM7WUFDbkMsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixtQkFBbUIsYUFHbkIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixpQ0FBaUM7WUFDakMscUJBQXFCO1lBQ3JCLDJCQUEyQjtZQUMzQix5QkFBeUI7WUFDekIsb0JBQW9CO1lBQ3BCLG1DQUFtQztZQUNuQyxpQkFBaUI7WUFDakIsbUJBQW1CO2dIQUdWLFlBQVksWUFwQ3JCLFVBQVU7WUFDVixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osYUFBYTtZQUNiLGFBQWE7WUFFYixhQUFhO1lBQ2IsaUJBQWlCO1lBQ2pCLGlDQUFpQztZQUNqQyxxQkFBcUI7WUFDckIsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6QixvQkFBb0I7WUFFcEIsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixtQkFBbUI7OzRGQWVWLFlBQVk7a0JBdkN4QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUU7d0JBQ1AsVUFBVTt3QkFDVixjQUFjO3dCQUNkLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixpQ0FBaUM7d0JBQ2pDLHFCQUFxQjt3QkFDckIsMkJBQTJCO3dCQUMzQix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQyxpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGlDQUFpQzt3QkFDakMscUJBQXFCO3dCQUNyQiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudVwiO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBUYUljb25zTW9kdWxlIH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7XG4gIFRhQ29udGFpbmVyTW9kdWxlLFxuICBUYUxheW91dE1vZHVsZSxcbiAgVGFMaXN0TW9kdWxlLFxuICBUYVN3aXBlck1vZHVsZSxcbiAgVGFVaU1vZHVsZSxcbn0gZnJvbSBcIkB0YS91aVwiO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSBcIkB0YS91dGlsc1wiO1xuXG5pbXBvcnQgeyBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2JvdHRvbS1zaGVldC90ZW1wbGF0ZXMvYmFzaWMvYm90dG9tLXNoZWV0LXRlbXBsYXRlLWJhc2ljLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2JvdHRvbS1zaGVldC90ZW1wbGF0ZXMvZ2VuZXJpYy9ib3R0b20tc2hlZXQtdGVtcGxhdGUtZ2VuZXJpYy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudS9pdGVtL21lbnUtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFF1aWNrQWN0aW9uc0N1c3RvbUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvcXVpY2stYWN0aW9ucy1jdXN0b20vcXVpY2stYWN0aW9ucy1jdXN0b20uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBRdWlja0FjdGlvbnNDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3F1aWNrLWFjdGlvbnMvcXVpY2stYWN0aW9ucy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRvZ2dsZU5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvZ2dsZS1uYXZpZ2F0aW9uL3RvZ2dsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudFwiO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFNZW51TW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKlxuICogLy8gSW1wb3J0IHRoZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgZGlyZWN0bHk6XG4gKiBpbXBvcnQgeyBNZW51Q29tcG9uZW50LCBNZW51SXRlbUNvbXBvbmVudCwgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtcbiAgICBUYVVpTW9kdWxlLFxuICAgIFRhU3dpcGVyTW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhRGlyZWN0aXZlUGlwZU1vZHVsZSxcbiAgICBUYUxheW91dE1vZHVsZSxcbiAgICBUYUxpc3RNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBUYUljb25zTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIE1lbnVJdGVtQ29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCxcbiAgICBRdWlja0FjdGlvbnNDb21wb25lbnQsXG4gICAgUXVpY2tBY3Rpb25zQ3VzdG9tQ29tcG9uZW50LFxuICAgIFRvZ2dsZU5hdmlnYXRpb25Db21wb25lbnQsXG4gICAgQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQsXG4gICAgTWFpbk1lbnVDb21wb25lbnQsXG4gICAgTGlzdENvbXBvbmVudCxcbiAgICBOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWVudUNvbXBvbmVudCxcbiAgICBNZW51SXRlbUNvbXBvbmVudCxcbiAgICBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQsXG4gICAgUXVpY2tBY3Rpb25zQ29tcG9uZW50LFxuICAgIFF1aWNrQWN0aW9uc0N1c3RvbUNvbXBvbmVudCxcbiAgICBUb2dnbGVOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgIE1haW5NZW51Q29tcG9uZW50LFxuICAgIE5hdmlnYXRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhTWVudU1vZHVsZSB7fVxuIl19