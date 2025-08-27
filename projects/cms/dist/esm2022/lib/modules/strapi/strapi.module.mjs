import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamFormInputsModule } from '@ta/form-input';
import { CamContainerModule, CamUiModule } from '@ta/ui';
import { CamDirectivePipeModule } from '@ta/utils';
import { CmsComponent } from './components/cms/cms.component';
import { SaleComponent } from './components/sale/sale.component';
import { LinkComponent } from './components/types/link/link.component';
import { RichTextComponent } from './components/types/rich-text/rich-text.component';
import { TextComponent } from './components/types/text/text.component';
import { CamTranslationStrapi } from './translation.service';
import * as i0 from "@angular/core";
/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { CamStrapiModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { CmsComponent, SaleComponent } from '@ta/library-name';
 */
export class CamStrapiModule {
    constructor() {
        CamTranslationStrapi.getInstance();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiModule, imports: [CommonModule, CamUiModule, CamDirectivePipeModule, CamContainerModule, CamFormInputsModule, CmsComponent, RichTextComponent, LinkComponent, TextComponent, SaleComponent], exports: [CmsComponent, SaleComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiModule, imports: [CommonModule, CamUiModule, CamDirectivePipeModule, CamContainerModule, CamFormInputsModule, CmsComponent, RichTextComponent, LinkComponent, SaleComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CamStrapiModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [CommonModule, CamUiModule, CamDirectivePipeModule, CamContainerModule, CamFormInputsModule, CmsComponent, RichTextComponent, LinkComponent, TextComponent, SaleComponent],
                    exports: [CmsComponent, SaleComponent],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9zdHJhcGkvc3RyYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNyRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTdEOzs7Ozs7Ozs7O0dBVUc7QUFRSCxNQUFNLE9BQU8sZUFBZTtJQUMxQjtRQUNFLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7K0dBSFUsZUFBZTtnSEFBZixlQUFlLFlBSmhCLFlBQVksRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxhQUN4SyxZQUFZLEVBQUUsYUFBYTtnSEFHMUIsZUFBZSxZQUpoQixZQUFZLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQWlCLGFBQWE7OzRGQUl2SyxlQUFlO2tCQVAzQixRQUFRO21CQUFDO29CQUVSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztvQkFDbkwsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztpQkFFdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FtRm9ybUlucHV0c01vZHVsZSB9IGZyb20gJ0B0YS9mb3JtLWlucHV0JztcbmltcG9ydCB7IENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtVWlNb2R1bGUgfSBmcm9tICdAdGEvdWknO1xuaW1wb3J0IHsgQ2FtRGlyZWN0aXZlUGlwZU1vZHVsZSB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jbXMvY21zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NhbGUvc2FsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlua0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90eXBlcy9saW5rL2xpbmsuY29tcG9uZW50JztcbmltcG9ydCB7IFJpY2hUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3R5cGVzL3JpY2gtdGV4dC9yaWNoLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHlwZXMvdGV4dC90ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYW1UcmFuc2xhdGlvblN0cmFwaSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cyBpbnN0ZWFkLlxuICogVGhpcyBtb2R1bGUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBJbnN0ZWFkIG9mIGltcG9ydGluZyB0aGUgbW9kdWxlOlxuICogLy8gaW1wb3J0IHsgQ2FtU3RyYXBpTW9kdWxlIH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKiBcbiAqIC8vIEltcG9ydCB0aGUgc3RhbmRhbG9uZSBjb21wb25lbnRzIGRpcmVjdGx5OlxuICogaW1wb3J0IHsgQ21zQ29tcG9uZW50LCBTYWxlQ29tcG9uZW50IH0gZnJvbSAnQHRhL2xpYnJhcnktbmFtZSc7XG4gKi9cbkBOZ01vZHVsZSh7XG5cbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2FtVWlNb2R1bGUsIENhbURpcmVjdGl2ZVBpcGVNb2R1bGUsIENhbUNvbnRhaW5lck1vZHVsZSwgQ2FtRm9ybUlucHV0c01vZHVsZSwgQ21zQ29tcG9uZW50LCBSaWNoVGV4dENvbXBvbmVudCwgTGlua0NvbXBvbmVudCwgVGV4dENvbXBvbmVudCwgU2FsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDbXNDb21wb25lbnQsIFNhbGVDb21wb25lbnRdLFxuXG59KVxuZXhwb3J0IGNsYXNzIENhbVN0cmFwaU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIENhbVRyYW5zbGF0aW9uU3RyYXBpLmdldEluc3RhbmNlKCk7XG4gIH1cbn1cbiJdfQ==