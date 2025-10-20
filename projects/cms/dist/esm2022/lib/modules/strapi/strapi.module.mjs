import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaFormInputsModule } from '@ta/form-input';
import { TaContainerModule, TaUiModule } from '@ta/ui';
import { TaDirectivePipeModule } from '@ta/utils';
import { CmsComponent } from './components/cms/cms.component';
import { SaleComponent } from './components/sale/sale.component';
import { LinkComponent } from './components/types/link/link.component';
import { RichTextComponent } from './components/types/rich-text/rich-text.component';
import { TextComponent } from './components/types/text/text.component';
import { TaTranslationStrapi } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaStrapiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
export class TaStrapiModule {
    constructor() {
        TaTranslationStrapi.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            TextComponent,
            SaleComponent], exports: [CmsComponent, SaleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, imports: [CommonModule,
            TaUiModule,
            TaDirectivePipeModule,
            TaContainerModule,
            TaFormInputsModule,
            CmsComponent,
            RichTextComponent,
            LinkComponent,
            SaleComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaStrapiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaUiModule,
                        TaDirectivePipeModule,
                        TaContainerModule,
                        TaFormInputsModule,
                        CmsComponent,
                        RichTextComponent,
                        LinkComponent,
                        TextComponent,
                        SaleComponent,
                    ],
                    exports: [CmsComponent, SaleComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvc3RyYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVEOzs7Ozs7Ozs7O0dBVUc7QUFpQkgsTUFBTSxPQUFPLGNBQWM7SUFDekI7UUFDRSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDOytHQUhVLGNBQWM7Z0hBQWQsY0FBYyxZQWJ2QixZQUFZO1lBQ1osVUFBVTtZQUNWLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGFBQWE7WUFDYixhQUFhLGFBRUwsWUFBWSxFQUFFLGFBQWE7Z0hBRTFCLGNBQWMsWUFidkIsWUFBWTtZQUNaLFVBQVU7WUFDVixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGFBQWE7WUFFYixhQUFhOzs0RkFJSixjQUFjO2tCQWhCMUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixxQkFBcUI7d0JBQ3JCLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixhQUFhO3dCQUNiLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztpQkFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGFGb3JtSW5wdXRzTW9kdWxlIH0gZnJvbSAnQHRhL2Zvcm0taW5wdXQnO1xuaW1wb3J0IHsgVGFDb250YWluZXJNb2R1bGUsIFRhVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgVGFEaXJlY3RpdmVQaXBlTW9kdWxlIH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ntcy9jbXMuY29tcG9uZW50JztcbmltcG9ydCB7IFNhbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2FsZS9zYWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3R5cGVzL2xpbmsvbGluay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmljaFRleHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHlwZXMvcmljaC10ZXh0L3JpY2gtdGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90eXBlcy90ZXh0L3RleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25TdHJhcGkgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzdGFuZGFsb25lIGNvbXBvbmVudHMgaW5zdGVhZC5cbiAqIFRoaXMgbW9kdWxlIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSB2ZXJzaW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgVGFTdHJhcGlNb2R1bGUgfSBmcm9tICdAdGEvbGlicmFyeS1uYW1lJztcbiAqXG4gKiAvLyBJbXBvcnQgdGhlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBkaXJlY3RseTpcbiAqIGltcG9ydCB7IENtc0NvbXBvbmVudCwgU2FsZUNvbXBvbmVudCB9IGZyb20gJ0B0YS9saWJyYXJ5LW5hbWUnO1xuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRhVWlNb2R1bGUsXG4gICAgVGFEaXJlY3RpdmVQaXBlTW9kdWxlLFxuICAgIFRhQ29udGFpbmVyTW9kdWxlLFxuICAgIFRhRm9ybUlucHV0c01vZHVsZSxcbiAgICBDbXNDb21wb25lbnQsXG4gICAgUmljaFRleHRDb21wb25lbnQsXG4gICAgTGlua0NvbXBvbmVudCxcbiAgICBUZXh0Q29tcG9uZW50LFxuICAgIFNhbGVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtDbXNDb21wb25lbnQsIFNhbGVDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUYVN0cmFwaU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFRhVHJhbnNsYXRpb25TdHJhcGkuZ2V0SW5zdGFuY2UoKTtcbiAgfVxufVxuIl19