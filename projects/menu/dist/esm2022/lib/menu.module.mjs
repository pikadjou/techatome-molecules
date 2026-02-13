import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { TaIconsModule } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { TaContainerModule, TaLayoutModule, TaListModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
import { BottomSheetTemplateBasicComponent } from './components/bottom-sheet/templates/basic/bottom-sheet-template-basic.component';
import { BottomSheetTemplateGenericComponent } from './components/bottom-sheet/templates/generic/bottom-sheet-template-generic.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { ListComponent } from './components/list/list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MenuItemComponent } from './components/menu/item/menu-item.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
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
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            ListComponent,
            NavigationComponent], exports: [MenuComponent,
            MenuItemComponent,
            BottomSheetTemplateBasicComponent,
            ContextMenuComponent,
            BottomSheetTemplateGenericComponent,
            MainMenuComponent,
            NavigationComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaMenuModule, imports: [TaUiModule,
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
                        ContextMenuComponent,
                        BottomSheetTemplateGenericComponent,
                        MainMenuComponent,
                        NavigationComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL21lbnUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNwSSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUMxSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOztBQUVuRjs7Ozs7Ozs7OztHQVVHO0FBaUNILE1BQU0sT0FBTyxZQUFZOytHQUFaLFlBQVk7Z0hBQVosWUFBWSxZQTdCckIsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixxQkFBcUI7WUFDckIsY0FBYztZQUNkLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1lBQ2IsYUFBYTtZQUNiLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLG9CQUFvQjtZQUNwQixtQ0FBbUM7WUFDbkMsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixtQkFBbUIsYUFHbkIsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixpQ0FBaUM7WUFDakMsb0JBQW9CO1lBQ3BCLG1DQUFtQztZQUNuQyxpQkFBaUI7WUFDakIsbUJBQW1CO2dIQUdWLFlBQVksWUE3QnJCLFVBQVU7WUFDVixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGNBQWM7WUFDZCxZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtZQUViLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLG9CQUFvQjtZQUVwQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLG1CQUFtQjs7NEZBWVYsWUFBWTtrQkFoQ3hCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRTt3QkFDUCxVQUFVO3dCQUNWLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsaUJBQWlCO3dCQUNqQixpQ0FBaUM7d0JBQ2pDLG9CQUFvQjt3QkFDcEIsbUNBQW1DO3dCQUNuQyxpQkFBaUI7d0JBQ2pCLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGlDQUFpQzt3QkFDakMsb0JBQW9CO3dCQUNwQixtQ0FBbUM7d0JBQ25DLGlCQUFpQjt3QkFDakIsbUJBQW1CO3FCQUNwQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGFJY29uc01vZHVsZSB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRhQ29udGFpbmVyTW9kdWxlLCBUYUxheW91dE1vZHVsZSwgVGFMaXN0TW9kdWxlLCBUYVVpTW9kdWxlIH0gZnJvbSAnQHRhL3VpJztcbmltcG9ydCB7IFRhRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IEJvdHRvbVNoZWV0VGVtcGxhdGVCYXNpY0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ib3R0b20tc2hlZXQvdGVtcGxhdGVzL2Jhc2ljL2JvdHRvbS1zaGVldC10ZW1wbGF0ZS1iYXNpYy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQm90dG9tU2hlZXRUZW1wbGF0ZUdlbmVyaWNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm90dG9tLXNoZWV0L3RlbXBsYXRlcy9nZW5lcmljL2JvdHRvbS1zaGVldC10ZW1wbGF0ZS1nZW5lcmljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZXh0LW1lbnUvY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS9pdGVtL21lbnUtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEluc3RlYWQgb2YgaW1wb3J0aW5nIHRoZSBtb2R1bGU6XG4gKiAvLyBpbXBvcnQgeyBUYU1lbnVNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IE1lbnVDb21wb25lbnQsIE1lbnVJdGVtQ29tcG9uZW50LCBCb3R0b21TaGVldFRlbXBsYXRlQmFzaWNDb21wb25lbnQgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqL1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW1xuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFDb250YWluZXJNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhTGF5b3V0TW9kdWxlLFxuICAgIFRhTGlzdE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFRhSWNvbnNNb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIE1lbnVDb21wb25lbnQsXG4gICAgTWVudUl0ZW1Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgIE1haW5NZW51Q29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnQsXG4gICAgTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1lbnVDb21wb25lbnQsXG4gICAgTWVudUl0ZW1Db21wb25lbnQsXG4gICAgQm90dG9tU2hlZXRUZW1wbGF0ZUJhc2ljQ29tcG9uZW50LFxuICAgIENvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIEJvdHRvbVNoZWV0VGVtcGxhdGVHZW5lcmljQ29tcG9uZW50LFxuICAgIE1haW5NZW51Q29tcG9uZW50LFxuICAgIE5hdmlnYXRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRhTWVudU1vZHVsZSB7fVxuIl19